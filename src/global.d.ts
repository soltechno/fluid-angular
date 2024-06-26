declare var fluid: {
    init: (config: {
        operatorId: number;
        userId: string;
        sessionId: string;
        locale: string;
        countryCode: string;
        currency: string;
    }) => void;
};