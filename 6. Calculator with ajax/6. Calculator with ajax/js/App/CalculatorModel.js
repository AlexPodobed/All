function CalculatorModel() {
        var facade = new Facade();

        this.solveExpression = function(model, params, callback){
                return facade.useAjax(model, params, callback);
        };


        return this;
}
