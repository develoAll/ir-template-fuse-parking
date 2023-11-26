export interface UserAuth {
    codUser: string;
    nameUser: string;
    statusUser: boolean;
    passwordUser: null;
    numPerson: string;
    indBloqueo: null;
    fecBloqueo: null;
    fecUltPassword: null;
    fecUltInitial: null;
    passwordReset: null;
    typeUser: null;
    fecBaja: null;
    passwordAuth: null;
    rol: Rol[];
    person: Person;
    menu: Menu[];
}

export interface Menu {
    idMenu: number;
    parentId: number | null;
    nameMenu: string;
    route: string;
    icon: string;
    status: boolean;
    moduleDTO: null;
    type:
    | 'aside'
    | 'basic'
    | 'collapsable'
    | 'divider'
    | 'group'
    | 'spacer';
    actionDTO: ActionDTO[] | null;
    children: Menu[] | null;
}

export interface ActionDTO {
    nameAction: string;
    desAction: null;
    status: boolean;
}

export class Person {
    id: number;
    startDate: null;
    seniorityStartDate: null;
    fatherLastName: string;
    motherLastName: string;
    firstName: string;
    secondaryName: null;
    nationalIdType: string;
    nationalIdentifierNumber: null;
    address: null;
    region: null;
    district: null;
    departament: null;
    phone1: null;
    personalMail: string;
    workMail: string;
    userName: null;
    birthDay: null;
    gender: null;
    positionCode: null;
    positionName: null;
    departamentCode: null;
    departamentName: null;
    departamentoCode1: null;
    departamentoName1: null;
    departamentoCode2: null;
    departamentoName2: null;
    departamentoCode3: null;
    departamentoName3: null;
    departamentoCode4: null;
    departamentoName4: null;
    departamentoCode5: null;
    departamentoName5: null;
    departamentoCode6: null;
    departamentoName6: null;
    centroCostoCode: null;
    centroCostoName: null;
    locationCode: null;
    locationName: null;
    nationalIdentifierNumberManager: null;
    positionCodeManager: null;
    tipoTrabajo: null;
    tipoPlanilla: null;
    grupoOcupacional: null;
    aplicaBono: null;
    tipodeBono: null;
    nationality: null;
    personNumber: null;
    businessUnitName: null;
    businessUnitId: null;
    action: null;
    photo: null;
    userMod: null;
    fecMod: null;
    terminateDate: null;
    effectiveDate: null;


    get fullName() {
        return this.firstName + ' ' + this.fatherLastName + ' ' + this.motherLastName;
    }
}

export interface Rol {
    nameRol: string;
    status: boolean;
    menu: null;
    organizationList: OrganizationRol[]
}

export interface OrganizationRol {
    legalEntityCode: string;
    businessUniId: string;
    socialReason: string;
}
