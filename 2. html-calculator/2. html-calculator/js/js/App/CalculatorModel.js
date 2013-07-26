function CalculatorModel() {

        this.summ = function(result) {
                return result.number_one + result.number_two;
        };
        this.minus = function(result) {
                return result.number_one - result.number_two;
        };
        this.multiply = function(result) {
                return result.number_one * result.number_two;
        };
        this.devide = function(result) {
                return result.number_one / result.number_two;
        };

        return this;
};