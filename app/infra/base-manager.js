import nconf from 'nconf';

const baseManager = {
    handle(app) {
        this.configureCommon(app);

        if(nconf.get('development')) {
            this.configureDevelopmentEnv(app);
        } else {
            this.configureProductionEnv(app);
        }
    },

    configureCommon(/*app*/) {},

    configureDevelopmentEnv(/*app*/) {},

    configureProductionEnv(/*app*/) {}
};

export default baseManager;