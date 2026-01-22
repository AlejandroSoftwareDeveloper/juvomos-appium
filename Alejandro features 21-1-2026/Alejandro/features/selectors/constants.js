
export const JUV = 'id:com.juvomos.pos:id/';

// export const  CUSTOM_CARD =  

// --- PANTALLA PIN / LOGIN ----------------------------------------------------
export const PIN_LOGIN             = `090909`
export const PIN_INPUT             = `${JUV}txt_pin_user`;
export const PIN_INPUT_REGISTER    = `${JUV}editPinStore`;
export const ACCEPT_BUTTON         = `${JUV}checkBigImage`;
export const BACK_TO_PIN_BUTTON    = `${JUV}backToPin`;
export const ENTER_PIN_TEXT        = `${JUV}enterPinText`;
export const SNACKBAR_TEXT         = `${JUV}snackbar_text`;

// --- MENÚ PRINCIPAL ---------------------------------------------------------
export const CLOCK_IN_BUTTON       = `${JUV}clockInButton`;
export const CLOCK_OUT_BUTTON      = `${JUV}clockOutButton`;
export const REG_TIME_BUTTON       = `${JUV}buttonTimeClock`;
export const BREAK_IN_BUTTON       = `${JUV}breakInButton`;
export const BREAK_OUT_BUTTON      = `${JUV}breakOutButton`;

// --- CUENTAS / PEDIDOS -------------------------------------------------------
export const BTN_SHOW_ORDER        = `${JUV}btnShowOrder`;
export const BTN_SEND_TO_KITCHEN   = `${JUV}btnSendPointOfSale`;
export const BTN_ORDER_RECALL      = `${JUV}btnOrderRecall`;
export const BTN_RECALL            = `${JUV}btnRecall`;
export const LAYOUT_CHECK_ITEM     = `${JUV}layout_check_detail_item`;
export const TICKET_LIST_RECYCLER  = `${JUV}idTicketListRecycler`;
export const ITEM_INVOICE_NAME     = `${JUV}itemInvoiceName`;
export const ITEM_INVOICE_TOTAL    = `${JUV}itemInvoiceTotal`;
export const TXT_TICKET_NUMBER     = `${JUV}txtTicketNumber`;

// --- MODALES GENERALES -------------------------------------------------------
export const IMG_CLOSE_BUTTON      = `${JUV}imgCloseButton`;
export const MESSAGE_TITLE         = `${JUV}messageTitle`;
export const NAV_BACK              = '~Navegar hacia arriba';

// --- PROPINAS ----------------------------------------------------------------
export const BTN_CASH_TIPS         = `${JUV}btnCashTips`;
export const DECLARE_TIPS_AMOUNT   = `${JUV}declareTipsAmountId`;
export const TOTAL_TIPS_DECLARED   = `${JUV}totalCashDeclaredValue`;
export const TOTAL_TIP_TIMESHEET   = `${JUV}txtValueTotalTipTimeSheet`;

// --- DESCUENTOS --------------------------------------------------------------
export const LAYOUT_DISCOUNT       = `${JUV}layoutDiscount`;
export const DISCOUNT_VALUE        = `${JUV}discountValue`;
export const BTN_DISCOUNT          = `${JUV}idBtnDiscount`;

// --- TRANSFERENCIAS ----------------------------------------------------------
export const BTN_TRANSFER_ITEM     = `${JUV}btnTransferItem`;
export const BTN_TRANSFER          = `${JUV}btnTransfer`;
export const BTN_TRANSFER_EMPLOYEE = `${JUV}btnTransferEmployee`;
export const BTN_TRANSFER_CHECK    = `${JUV}btnTransferChec`;
export const BTN_CANCEL            = `${JUV}idCancelButton`;
export const BTN_SAVE_CHANGES      = `${JUV}voidCloseButton`;

// --- VOID / CANCELAR ---------------------------------------------------------
export const BTN_VOID              = `${JUV}btnVoid`;
export const VOID_GENERAL_LAYOUT   = `${JUV}voidGeneralLayout`;

// --- TECLADO NUMÉRICO --------------------------------------------------------
export const BTN_ZERO              = `${JUV}zero_btn_pin`;
export const BTN_ONE               = `${JUV}one_btn_pin`;
export const BTN_TWO               = `${JUV}two_btn_pin`;
export const BTN_THREE             = `${JUV}three_btn_pin`;
export const BTN_FOUR              = `${JUV}four_btn_pin`;
export const BTN_FIVE              = `${JUV}five_btn_pin`;
export const BTN_SIX               = `${JUV}six_btn_pin`;
export const BTN_SEVEN             = `${JUV}seven_btn_pin`;
export const BTN_EIGHT             = `${JUV}eight_btn_pin`;
export const BTN_NINE              = `${JUV}nine_btn_pin`;

// --- VALORES DE PRUEBA -------------------------------------------------------
export const VALID_PIN             = '090909';
export const VALID_INSTALL_CODE    = '647125';
export const INVALID_CODE_SPECIAL  = '!@#$%^&*';
export const INVALID_CODE_ALPHA    = 'Admin123';
export const TEST_EMPLOYEE_NAME    = 'QA 3';
export const CUSTOM_PRODUCT_NAME   = 'qa3';

// --- XPATHS REUTILIZABLEES ---------------------------------------------------
export const PICK_UP_OPTION =
  '//android.widget.TextView[@resource-id="com.juvomos.pos:id/orderTypeName" and @text="Pick Up"]';

export const CUSTOM_CARD =
  '(//android.widget.LinearLayout[@resource-id="com.juvomos.pos:id/linearLayout30"])[12]';

export const SECOND_TICKET_LIST =
  '(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.juvomos.pos:id/idTicketListRecycler"])[2]';

