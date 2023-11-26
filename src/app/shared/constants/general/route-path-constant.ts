export class RoutePathConstant {
    public static readonly PROCESSES = '/procesos';
    public static readonly PR_COR_BUDGET_PROCESS_INBOX = this.PROCESSES + '/validar-datos-previo-presupuesto/bandeja-procesos-presupuesto';
    public static readonly PR_COR_PROCESS_DATA = this.PROCESSES + '/validar-datos-previo-presupuesto/ingresar-datos-proceso';
    public static readonly PR_COR_MAINTANCE_PERCENTAGES_AMOUNTS = this.PROCESSES + '/validar-datos-previo-presupuesto/mantenimiento-porcentajes-montos';
    public static readonly PR_DIR_VIEW_PROCESS = this.PROCESSES + '/lista-procesos/vista-proceso';
    public static readonly PR_HRM_BUDGET_PROCESS_INBOX = this.PROCESSES + '/lista-procesos/bandeja-procesos-presupuestos';
    public static readonly PR_HRM_VIEW_PROCESS = this.PROCESSES + '/lista-procesos/vista-procesos';
    public static readonly PR_COM_VIEW_PROCESS = this.PROCESSES + '/lista-procesos/vista-de-procesos';

    public static readonly POSITIONS = '/posiciones';
    public static readonly PO_COR_POSITION_REQUEST_INBOX_BUDGET_PHASE = this.POSITIONS + '/lista-solicitudes-posiciones/bandeja-solicitudes-etapa-presupuesto';
    public static readonly PO_COR_EDIT_POSITION_REQUEST = this.POSITIONS + '/lista-solicitudes-posiciones/editar-posiciones';
    public static readonly PO_COR_SUMMARY = this.POSITIONS + '/lista-solicitudes-posiciones/resumen-solicitudes-etapa-presupuesto';
    public static readonly PO_DIR_CREATE_POSITION_REQUEST = this.POSITIONS + '/crear-solicitud-posiciones';
    public static readonly PO_DIR_POSITION_REQUEST_INBOX = this.POSITIONS + '/lista-solicitudes-posiciones/bandeja-solicitud-posiciones';
    public static readonly PO_DIR_SUMMARY = this.POSITIONS + '/lista-solicitudes-posiciones/resumen';
    public static readonly PO_DIR_REVALUE_POSITION = this.POSITIONS + '/lista-solicitudes-posiciones/volver-valorizar-posicion';
    public static readonly PO_COM_POSITION_REQUEST_INBOX = this.POSITIONS + '/lista-solicitudes-posiciones/solicitud-posiciones';
    public static readonly PO_COM_POSITION_REQUEST_INBOX_BUDGET_PHASE = this.POSITIONS + '/lista-solicitudes-posiciones/solicitud-posiciones-etapa-presupuesto';
    public static readonly PO_COM_REVALUE_POSITION = this.POSITIONS + '/lista-solicitudes-posiciones/volver-valorizar';
    public static readonly PO_HRM_POSITION_REQUEST_INBOX = this.POSITIONS + '/lista-solicitudes-posiciones/bandeja-solicitudes-posiciones';
    public static readonly PO_HRM_SUMMARY = this.POSITIONS + '/lista-solicitudes-posiciones/vista-resumen';

    public static readonly BUDGET = '/presupuesto';
    public static readonly BU_DIR_CREATE_BUDGET = this.BUDGET + '/crear-presupuesto';
    public static readonly BU_COM_BUDGET_DETAILS = this.BUDGET + '/detalle-presupuesto';
    public static readonly BU_COM_WORDSHEET_DETAIL = this.BUDGET + '/detalle-presupuesto/hoja-trabajo-cc-multiple/detalle';
    public static readonly BU_COM_WORDSHEET_ADD_RECORDS = this.BUDGET + '/detalle-presupuesto/hoja-trabajo-cc-multiple/agregar-registros';
    public static readonly BU_HRM_REJECT_APPROVE_BUDGET = this.BUDGET + '/rechazar-aprobar-presupuesto';
    public static readonly BU_CEO_BUDGET_REQUEST_INBOX = this.BUDGET + '/aprobar-presupuesto/bandeja-solicitud-presupuesto';
    public static readonly BU_CEO_REJECT_APPROVE_BUDGET = this.BUDGET + '/aprobar-presupuesto/rechazar-aprobar-presupuesto';

    public static readonly ABSENCES = '/absences';
    public static readonly AB_ABSENCE_TYPE = this.ABSENCES + '/absences-types';
    public static readonly AB_NEW_ABSENCE_TYPE = this.AB_ABSENCE_TYPE + '/new-absences-type';
    public static readonly AB_ABSENCE_TYPE_ASSIGNMENT_RULE = this.ABSENCES + '/absence-type-assignment-rules';
    public static readonly AB__NEW_ABSENCE_TYPE_ASSIGNMENT_RULE = this.AB_ABSENCE_TYPE_ASSIGNMENT_RULE + '/new-assignment-rule';
    public static readonly AB_ABSENCES_APPROVAL_RULES = this.ABSENCES + '/absence-approval-rules';
    public static readonly AB_EDIT_APPROVAL_RULES = this.AB_ABSENCES_APPROVAL_RULES + '/edit-approval-rule';
}


export enum RouterParent {
    position = "posiciones",
    budget = "presupuesto"

}

export enum RouterChildrenPositions {
    createPosition = `${RouterParent.position}/crear-solicitud-posiciones`,
    approveRequest = `${RouterParent.position}/lista-solicitudes-posiciones/approve-request`,
    requestPositions = `${RouterParent.position}/lista-solicitudes-posiciones/solicitud-posiciones`,
    createBudget = `${RouterParent.budget}/crear-presupuesto`,
    editRequestPositions = `${RouterParent.position}/editar-solicitud-posiciones`,
}



