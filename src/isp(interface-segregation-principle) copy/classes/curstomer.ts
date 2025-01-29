import { CustomerOrder, CustomerProtocol, EnterpriseCustomerProtocol } from "./interfaces/customer-protocol";


export class IndividualCustomer implements CustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(public name: string, cnpj: string) {
    const names = name.split(' ');
    this.firstName = names[0];
    this.lastName = names[names.length - 1];
    this.cpf = cnpj;
  }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}


export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  Name: string
  cnpj: string;

  constructor(public name: string, cnpj: string) {
    this.cnpj = cnpj;
    this.Name = name;
 }

  getName(): string {
    return this.Name;
  }

  getIDN(): string {
    return this.cnpj;
  }

}
