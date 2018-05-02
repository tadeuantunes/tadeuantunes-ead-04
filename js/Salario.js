class Salario{
    /**
     * 
     * @param {number} pSalarioBruto 
     */
    constructor(pSalarioBruto){
        this._salarioBruto = undefined;
        this._validarSalario(pSalarioBruto);
        this._descontoINSS = undefined;
        this._calcularINSS(pSalarioBruto);
        
        this._baseIRPF = this._salarioBruto - this._descontoINSS;
        this._valorIRPF = undefined;
        this._calcularIRPF(this._baseIRPF);

        this._totalDescontos = this._valorIRPF + this._descontoINSS;

        this._salarioLiquido = this._salarioBruto - this._totalDescontos;

        this._congelar();
    }

    _validarSalario(pSalarioBruto){
        if (typeof pSalarioBruto !== 'number')
      throw new Error('O salario deve ser um número válido');

        if (pSalarioBruto <= 0)
      throw new Error('O salario bruto deve ser maior que zero!');

      return this._salarioBruto = pSalarioBruto;
    }

    _calcularINSS(){
        if (this._salarioBruto <= 1693.72){
            return this._descontoINSS = (this._salarioBruto * 8) / 100;
        } else if (this._salarioBruto > 1693.72 && this._salarioBruto <= 2822.90){
            return this._descontoINSS = (this._salarioBruto * 9) / 100;
        } else if (this._salarioBruto > 2822.90 && this._salarioBruto <= 5645.80){
            return this._descontoINSS = (this._salarioBruto * 11) / 100;
        } else {
            return this._descontoINSS = 621.04;
        }
    }

    _calcularIRPF(){
        if (this._baseIRPF <= 1903.98){
            return this._valorIRPF = 0;
        } else if (this._salarioBruto > 1903.98 && this._salarioBruto <= 2826.65){
            return this._valorIRPF = ((this._baseIRPF - 142.80) * 7.5 / 100);
        } else if (this._salarioBruto > 2826.65 && this._salarioBruto <= 3751.05){
            return this._valorIRPF = ((this._baseIRPF - 354.80) * 15 / 100);
        } else if (this._salarioBruto > 3751.05 && this._salarioBruto <= 4664.68){
            return this._valorIRPF = ((this._baseIRPF - 636.13) * 22.5 / 100);
        } else {
            return this._valorIRPF = ((this._baseIRPF - 869.36) * 27.5 / 100);
        }
    }

    get salarioBruto(){
        return this._salarioBruto;
    }

    get descontoINSS(){
        return this._descontoINSS;
    }

    get totalDescontos(){
        return this._totalDescontos;
    }

    get salarioLiquido(){
        return this._salarioLiquido;
    }

    _congelar() {
        Object.freeze(this);
      }

}