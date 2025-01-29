export interface CustomerOrder{
  getName(): string;
  getIDN(): string; //identification number
}

export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  Name: string;
  cnpj: string;
}

