import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect
} from 'react';
import { useTheme } from 'styled-components';

import Alert from '../components/Alert'

import { Inspection, InspectionResult } from '../entities';
import api from '../services/api';

type Message = {
    title?: string,
    description?: string,
    color?: string
}

type InspectionContextData = {
    insert(keyword: string): Promise<string>,
    find(id: string): Promise<InspectionResult>,
    lastInspections: Array<Inspection>,
    loading: boolean
};

const InspectionContext = createContext({} as InspectionContextData);

const InspectionProvider: React.FC = ({ children }) => {
    const { colors } = useTheme();

    const [lastInspections, setLastInspections] = useState(new Array<Inspection>());
    const [message, setMessage] = useState<Message | null>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (message) setTimeout(() => setMessage(null), 10000);
    }, [message]);

    const onInsertSuccess = useCallback((inspection: Inspection) => {
        setLastInspections([inspection, ...lastInspections]);
    }, [lastInspections]);

    const insert = async (keyword: string): Promise<string> => {
        try {
            setLoading(true);
            const { data } = await api.post('/crawl',
                {
                    keyword
                }
            );
            if (data?.status) throw data;

            setMessage({
                title: 'Inspeção salva',
                description: `O id da inspeção é ${data.id}`,
                color: colors.success
            });
            onInsertSuccess({ keyword, id: data?.id, created_at: new Date() });
            return data?.id;
        } catch (error) {
            setMessage({
                title: 'Falha ao salvar inspeção',
                description: error?.message,
                color: colors.danger
            });
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const find = async (id: string): Promise<InspectionResult> => {
        try {
            setLoading(true);
            const { data } = await api.get(`/crawl/${id}`);
            if (data?.status === 404) throw data;

            return data;
        } catch (error) {
            setMessage({
                title: 'Falha ao buscar inspeção',
                description: error?.message,
                color: colors.danger
            });
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <InspectionContext.Provider
            value={{
                lastInspections,
                insert,
                find,
                loading
            }}
        >
            {
                message && (
                    <Alert
                        title={message?.title}
                        description={message?.description}
                        color={message?.color}
                    />
                )
            }
            {children}
        </InspectionContext.Provider>
    );
};

export const useInspection = () => useContext(InspectionContext);

export default InspectionProvider;