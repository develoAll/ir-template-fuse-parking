export class Parameters {
    public static readonly ABSENCE_TYPE_STATUS = 'AB00000001';
    public static readonly ABSENCE_TYPE_REASON = 'AB00000002';
    public static readonly ABSENCE_TYPE_UOM = 'AB00000003';
    public static readonly ABSENCE_TYPE_ALERT = 'AB00000004';
    public static readonly ABSENCE_TYPE_ALERT_AB00000004_MINDURATION = 'MINDURATION';
    public static readonly ABSENCE_TYPE_ALERT_AB00000004_MAXDURATION = 'MAXDURATION';
    public static readonly ABSENCE_TYPE_ALERT_AB00000004_MINDURATION_NINGUNA = 'Ninguna';
    public static readonly ABSENCE_TYPE_ALERT_AB00000004_MAXDURATION_NINGUNA = 'Ninguna';
    public static readonly ABSENCE_TYPE_ALLOW = 'AB00000005';

    public static readonly TEMPLATE_TYPE = 'BT00000001';
    public static readonly LST_COMPANIES = 'BT00000004';
    public static readonly LST_STATUS_REQUEST = 'BT00000005';
    public static readonly LST_PERIOD = 'BT00000007'; // years

    public static readonly CATEGORY_POSITION = 'BT00000002';
    public static readonly CATEGORY_POSITION_BT00000002_NEW = 'NEW'; // nuevas posiciones
    public static readonly CATEGORY_POSITION_BT00000002_REC = 'REC'; // conversion de posiciones
    public static readonly CATEGORY_POSITION_BT00000002_ASC = 'ASC'; // ascensos
    public static readonly CATEGORY_POSITION_BT00000002_ELI = 'ELI'; // eliminacion de posiciones

    public static readonly STATUS_POSITION_BY_ROL = 'BT00000005';
    public static readonly STATUS_POSITION_BY_ROL_BT00000005_PVAL = 'PVAL';
    public static readonly STATUS_POSITION_BY_ROL_BT00000005_PGER = 'PGER';
    public static readonly STATUS_POSITION_BY_ROL_BT00000005_APRB = 'APRB';
    public static readonly STATUS_POSITION_BY_ROL_BT00000005_GERE = 'GERE';
    public static readonly STATUS_POSITION_BY_ROL_BT00000005_PCEO = 'PCEO';

    public static readonly STATUS_POSITION = 'BT00000002';
    public static readonly STATUS_POSITION_BT00000002_APR = 'APR';
    public static readonly STATUS_POSITION_BT00000002_REC = 'REC';
    public static readonly STATUS_POSITION_BT00000002_DEV = 'DEV';
}