const navItems = document.querySelectorAll(".nav-item");
const pageSections = document.querySelectorAll(".page-section");
const pageTitle = document.querySelector("#page-title");
const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);
const isLocalDemo = LOCAL_HOSTNAMES.has(window.location.hostname);
const isOnlineDemo = !isLocalDemo;
const newProjectShortcutButton = document.querySelector("#new-project-shortcut");
const brandHomeButton = document.querySelector("#brand-home");
const landingStartButtons = document.querySelectorAll(".landing-start");
const landingDemoJumpButton = document.querySelector(".landing-demo-jump");
const landingFeatureSection = document.querySelector("#landing-features");
const revealSections = document.querySelectorAll(".reveal-section");
const overviewProjectName = document.querySelector("#overview-project-name");
const overviewProjectStatus = document.querySelector("#overview-project-status");
const overviewProgressBar = document.querySelector("#overview-progress-bar");
const overviewProgressText = document.querySelector("#overview-progress-text");
const overviewUploadedCount = document.querySelector("#overview-uploaded-count");
const overviewReviewCount = document.querySelector("#overview-review-count");
const overviewStage = document.querySelector("#overview-stage");
const overviewMaterialNote = document.querySelector("#overview-material-note");
const overviewReviewNote = document.querySelector("#overview-review-note");
const overviewNextStep = document.querySelector("#overview-next-step");
const projectForm = document.querySelector("#project-form");
const projectIdInput = document.querySelector("#project-id");
const projectNameInput = document.querySelector("#project-name");
const projectClientNameInput = document.querySelector("#project-client-name");
const projectAuditYearInput = document.querySelector("#project-audit-year");
const projectCutoffDateInput = document.querySelector("#project-cutoff-date");
const projectIndustryInput = document.querySelector("#project-industry");
const projectAuditTypeInput = document.querySelector("#project-audit-type");
const projectEngagementTypeInput = document.querySelector("#project-engagement-type");
const projectStatusInput = document.querySelector("#project-status");
const projectOverallMaterialityInput = document.querySelector("#project-overall-materiality");
const projectPerformanceMaterialityInput = document.querySelector("#project-performance-materiality");
const projectTolerableMisstatementInput = document.querySelector("#project-tolerable-misstatement");
const projectClearlyTrivialThresholdInput = document.querySelector("#project-clearly-trivial-threshold");
const projectMaterialityBasisInput = document.querySelector("#project-materiality-basis");
const projectNotesInput = document.querySelector("#project-notes");
const projectFormMode = document.querySelector("#project-form-mode");
const projectSaveStatus = document.querySelector("#project-save-status");
const resetProjectFormButton = document.querySelector("#reset-project-form");
const projectList = document.querySelector("#project-list");
const projectCount = document.querySelector("#project-count");
const projectPagination = document.querySelector("#project-pagination");
const projectPrevPageButton = document.querySelector("#project-prev-page");
const projectNextPageButton = document.querySelector("#project-next-page");
const projectPageInfo = document.querySelector("#project-page-info");
const templateWorkpaperCount = document.querySelector("#template-workpaper-count");
const templateConfirmationCount = document.querySelector("#template-confirmation-count");
const templateDefaultCount = document.querySelector("#template-default-count");
const templateFilterButtons = document.querySelectorAll(".template-filter");
const templateTable = document.querySelector("#template-table");
const templateDetail = document.querySelector("#template-detail");
const generateWorkpaperButton = document.querySelector("#generate-workpaper");
const backWorkspaceButton = document.querySelector("#back-workspace");
const subjectSelect = document.querySelector("#subject-select");
const subjectTitle = document.querySelector("#subject-title");
const subjectDescription = document.querySelector("#subject-description");
const subjectTemplate = document.querySelector("#subject-template");
const auditFlowList = document.querySelector("#audit-flow-list");
const preRiskList = document.querySelector("#pre-risk-list");
const materialList = document.querySelector("#material-list");
const templateOptions = document.querySelector("#template-options");
const templateSummary = document.querySelector("#template-summary");
const workpaperList = document.querySelector("#workpaper-list");
const selectedWorkpaperTitle = document.querySelector("#selected-workpaper-title");
const selectedWorkpaperObjective = document.querySelector("#selected-workpaper-objective");
const selectedWorkpaperMaterials = document.querySelector("#selected-workpaper-materials");
const selectedWorkpaperAutoFields = document.querySelector("#selected-workpaper-auto-fields");
const selectedWorkpaperManual = document.querySelector("#selected-workpaper-manual");
const selectedWorkpaperAlerts = document.querySelector("#selected-workpaper-alerts");
const providedMaterialList = document.querySelector("#provided-material-list");
const missingMaterialList = document.querySelector("#missing-material-list");
const gapCount = document.querySelector("#gap-count");
const workpaperPageInfo = document.querySelector("#workpaper-page-info");
const prevWorkpaperPageButton = document.querySelector("#prev-workpaper-page");
const nextWorkpaperPageButton = document.querySelector("#next-workpaper-page");
const exportWorkpaperCopyButton = document.querySelector("#export-workpaper-copy");
const exportStatus = document.querySelector("#export-status");
const auditYearInput = document.querySelector("#audit-year-input");
const auditCutoffDateInput = document.querySelector("#audit-cutoff-date-input");
const auditPeriodHint = document.querySelector("#audit-period-hint");
const auditFileInput = document.querySelector("#audit-file-input");
const selectedFileName = document.querySelector("#selected-file-name");
const materialTypeSelect = document.querySelector("#material-type-select");
const confirmMaterialUploadButton = document.querySelector("#confirm-material-upload");
const uploadHint = document.querySelector("#upload-hint");
const uploadedCount = document.querySelector("#uploaded-count");
const uploadedFileList = document.querySelector("#uploaded-file-list");
const refreshKnowledgeButton = document.querySelector("#refresh-knowledge");
const knowledgeDocumentList = document.querySelector("#knowledge-document-list");
const knowledgeQuestionInput = document.querySelector("#knowledge-question");
const askKnowledgeButton = document.querySelector("#ask-knowledge");
const askKnowledgeAiButton = document.querySelector("#ask-knowledge-ai");
const knowledgeStatus = document.querySelector("#knowledge-status");
const knowledgeAnswer = document.querySelector("#knowledge-answer");
const fillableCount = document.querySelector("#fillable-count");
const fillableWorkpaperList = document.querySelector("#fillable-workpaper-list");
const samplingSourceStatus = document.querySelector("#sampling-source-status");
const samplingTaskList = document.querySelector("#sampling-task-list");
const samplingTaskTitle = document.querySelector("#sampling-task-title");
const samplingTaskStatus = document.querySelector("#sampling-task-status");
const samplingTaskDescription = document.querySelector("#sampling-task-description");
const samplingReviewPoints = document.querySelector("#sampling-review-points");
const samplingNextAction = document.querySelector("#sampling-next-action");
const samplingAmountThresholdInput = document.querySelector("#sampling-amount-threshold");
const samplingCutoffDateInput = document.querySelector("#sampling-cutoff-date");
const samplingCutoffDaysInput = document.querySelector("#sampling-cutoff-days");
const samplingKeywordsInput = document.querySelector("#sampling-keywords");
const generateSamplingCandidatesButton = document.querySelector("#generate-sampling-candidates");
const confirmSamplingSamplesButton = document.querySelector("#confirm-sampling-samples");
const returnSamplingToWorkpaperButton = document.querySelector("#return-sampling-to-workpaper");
const samplingStatusMessage = document.querySelector("#sampling-status-message");
const samplingCandidateList = document.querySelector("#sampling-candidate-list");
const samplingConfirmedList = document.querySelector("#sampling-confirmed-list");
const backWorkpaperBuilderButton = document.querySelector("#back-workpaper-builder");
const editorWorkpaperTitle = document.querySelector("#editor-workpaper-title");
const editorWorkpaperObjective = document.querySelector("#editor-workpaper-objective");
const editorMaterials = document.querySelector("#editor-materials");
const editorMissingMaterials = document.querySelector("#editor-missing-materials");
const editorAutoFields = document.querySelector("#editor-auto-fields");
const editorManualReview = document.querySelector("#editor-manual-review");
const editorWorkAreaTitle = document.querySelector("#editor-work-area-title");
const editorStatus = document.querySelector("#editor-status");
const cashCountEditor = document.querySelector("#cash-count-editor");
const cashLargeTransactionsEditor = document.querySelector("#cash-large-transactions-editor");
const cashCutoffEditor = document.querySelector("#cash-cutoff-editor");
const bankDepositEditor = document.querySelector("#bank-deposit-editor");
const bankReconciliationEditor = document.querySelector("#bank-reconciliation-editor");
const bankLargeTransactionsEditor = document.querySelector("#bank-large-transactions-editor");
const bankCutoffEditor = document.querySelector("#bank-cutoff-editor");
const otherMonetaryEditor = document.querySelector("#other-monetary-editor");
const otherMonetaryLargeTransactionsEditor = document.querySelector("#other-monetary-large-transactions-editor");
const otherMonetaryCutoffEditor = document.querySelector("#other-monetary-cutoff-editor");
const bankReconciliationAccounts = document.querySelector("#bank-reconciliation-accounts");
const bankAccountRows = document.querySelector("#bank-account-rows");
const cashLargeTransactionRows = document.querySelector("#cash-large-transaction-rows");
const cashCutoffTransactionRows = document.querySelector("#cash-cutoff-transaction-rows");
const bankLargeTransactionRows = document.querySelector("#bank-large-transaction-rows");
const bankCutoffTransactionRows = document.querySelector("#bank-cutoff-transaction-rows");
const otherMonetaryRows = document.querySelector("#other-monetary-rows");
const otherMonetaryLargeTransactionRows = document.querySelector("#other-monetary-large-transaction-rows");
const otherMonetaryCutoffTransactionRows = document.querySelector("#other-monetary-cutoff-transaction-rows");
const addBankAccountRowButton = document.querySelector("#add-bank-account-row");
const addCashLargeTransactionRowButton = document.querySelector("#add-cash-large-transaction-row");
const addCashCutoffRowButton = document.querySelector("#add-cash-cutoff-row");
const addBankLargeTransactionRowButton = document.querySelector("#add-bank-large-transaction-row");
const addBankCutoffRowButton = document.querySelector("#add-bank-cutoff-row");
const addOtherMonetaryRowButton = document.querySelector("#add-other-monetary-row");
const addOtherMonetaryLargeTransactionRowButton = document.querySelector("#add-other-monetary-large-transaction-row");
const addOtherMonetaryCutoffRowButton = document.querySelector("#add-other-monetary-cutoff-row");
const openBankReconciliationWorkpaperButton = document.querySelector("#open-bank-reconciliation-workpaper");
const openBankLargeTransactionsWorkpaperButton = document.querySelector("#open-bank-large-transactions-workpaper");
const openBankCutoffWorkpaperButton = document.querySelector("#open-bank-cutoff-workpaper");
const openCashLargeTransactionsWorkpaperButton = document.querySelector("#open-cash-large-transactions-workpaper");
const openCashCutoffWorkpaperButton = document.querySelector("#open-cash-cutoff-workpaper");
const openOtherMonetaryLargeTransactionsWorkpaperButton = document.querySelector("#open-other-monetary-large-transactions-workpaper");
const openOtherMonetaryCutoffWorkpaperButton = document.querySelector("#open-other-monetary-cutoff-workpaper");
const backBankDepositWorkpaperButton = document.querySelector("#back-bank-deposit-workpaper");
const backCashCountFromLargeWorkpaperButton = document.querySelector("#back-cash-count-from-large-workpaper");
const backCashCountFromCutoffWorkpaperButton = document.querySelector("#back-cash-count-from-cutoff-workpaper");
const backBankDepositFromLargeWorkpaperButton = document.querySelector("#back-bank-deposit-from-large-workpaper");
const backBankDepositFromCutoffWorkpaperButton = document.querySelector("#back-bank-deposit-from-cutoff-workpaper");
const backOtherMonetaryWorkpaperButton = document.querySelector("#back-other-monetary-workpaper");
const backOtherMonetaryFromCutoffWorkpaperButton = document.querySelector("#back-other-monetary-from-cutoff-workpaper");
const saveBankWorkpaperButton = document.querySelector("#save-bank-workpaper");
const saveCashCountWorkpaperButton = document.querySelector("#save-cash-count-workpaper");
const saveCashLargeTransactionsWorkpaperButton = document.querySelector("#save-cash-large-transactions-workpaper");
const saveCashCutoffWorkpaperButton = document.querySelector("#save-cash-cutoff-workpaper");
const saveBankReconciliationWorkpaperButton = document.querySelector("#save-bank-reconciliation-workpaper");
const saveBankLargeTransactionsWorkpaperButton = document.querySelector("#save-bank-large-transactions-workpaper");
const saveBankCutoffWorkpaperButton = document.querySelector("#save-bank-cutoff-workpaper");
const saveOtherMonetaryWorkpaperButton = document.querySelector("#save-other-monetary-workpaper");
const saveOtherMonetaryLargeTransactionsWorkpaperButton = document.querySelector("#save-other-monetary-large-transactions-workpaper");
const saveOtherMonetaryCutoffWorkpaperButton = document.querySelector("#save-other-monetary-cutoff-workpaper");
const saveWorkpaperStatus = document.querySelector("#save-workpaper-status");
const saveBankReconciliationStatus = document.querySelector("#save-bank-reconciliation-status");
const cashLargeTransactionsStatus = document.querySelector("#cash-large-transactions-status");
const cashCutoffStatus = document.querySelector("#cash-cutoff-status");
const bankLargeTransactionsStatus = document.querySelector("#bank-large-transactions-status");
const bankCutoffStatus = document.querySelector("#bank-cutoff-status");
const saveOtherMonetaryStatus = document.querySelector("#save-other-monetary-status");
const otherMonetaryLargeTransactionsStatus = document.querySelector("#other-monetary-large-transactions-status");
const otherMonetaryCutoffStatus = document.querySelector("#other-monetary-cutoff-status");
const bankTrialBalanceInput = document.querySelector("#bank-trial-balance-input");
const bankStatementInput = document.querySelector("#bank-statement-input");
const bankReconciliationInput = document.querySelector("#bank-reconciliation-input");
const bankLargeTransactionsInput = document.querySelector("#bank-large-transactions-input");
const bankCutoffTransactionsInput = document.querySelector("#bank-cutoff-transactions-input");
const bankTrialBalanceLabel = document.querySelector("#bank-trial-balance-label");
const bankStatementLabel = document.querySelector("#bank-statement-label");
const bankReconciliationLabel = document.querySelector("#bank-reconciliation-label");
const bankLargeTransactionsLabel = document.querySelector("#bank-large-transactions-label");
const bankCutoffTransactionsLabel = document.querySelector("#bank-cutoff-transactions-label");
const cashCutoffDateInput = document.querySelector("#cash-cutoff-date");
const bankCutoffDateInput = document.querySelector("#bank-cutoff-date");
const otherMonetaryCutoffDateInput = document.querySelector("#other-monetary-cutoff-date");
const rematchBankSupportButton = document.querySelector("#rematch-bank-support");
const bankLocalUploadStatus = document.querySelector("#bank-local-upload-status");
const bankLocalClearButtons = document.querySelectorAll("[data-clear-bank-file]");
const cashSupportInputs = document.querySelectorAll(".cash-support-input");
const cashLargeSourceInputs = document.querySelectorAll(".cash-large-source-input");
const cashCutoffSourceInputs = document.querySelectorAll(".cash-cutoff-source-input");
const cashSupportList = document.querySelector("#cash-support-list");
const cashCountUploadStatus = document.querySelector("#cash-count-upload-status");
const cashDenominationTable = document.querySelector("#cash-denomination-table");
const cashCountSummary = document.querySelector("#cash-count-summary");
const otherMonetarySupportInputs = document.querySelectorAll(".other-monetary-support-input");
const otherMonetaryTrialBalanceLabel = document.querySelector("#other-monetary-trial-balance-label");
const matchOtherMonetarySupportButton = document.querySelector("#match-other-monetary-support");
const selectCashLargeFromSamplingButton = document.querySelector("#select-cash-large-from-sampling");
const parseCashLargeTransactionsButton = document.querySelector("#parse-cash-large-transactions");
const selectBankLargeFromSamplingButton = document.querySelector("#select-bank-large-from-sampling");
const parseBankLargeTransactionsButton = document.querySelector("#parse-bank-large-transactions");
const selectOtherMonetaryLargeFromSamplingButton = document.querySelector("#select-other-monetary-large-from-sampling");
const parseOtherMonetaryLargeTransactionsButton = document.querySelector("#parse-other-monetary-large-transactions");
const selectCashCutoffFromSamplingButton = document.querySelector("#select-cash-cutoff-from-sampling");
const parseCashCutoffButton = document.querySelector("#parse-cash-cutoff");
const selectBankCutoffFromSamplingButton = document.querySelector("#select-bank-cutoff-from-sampling");
const parseBankCutoffButton = document.querySelector("#parse-bank-cutoff");
const selectOtherMonetaryCutoffFromSamplingButton = document.querySelector("#select-other-monetary-cutoff-from-sampling");
const parseOtherMonetaryCutoffButton = document.querySelector("#parse-other-monetary-cutoff");
const otherMonetarySupportList = document.querySelector("#other-monetary-support-list");
const otherMonetaryUploadStatus = document.querySelector("#other-monetary-upload-status");
const editorPlaceholder = document.querySelector("#editor-placeholder");

const workpapersPerPage = 5;
const largeTransactionsPerPage = 10;
let cashRuleConfig = [];

const samplingTasks = [
  {
    id: "cash-large",
    name: "现金大额收支检查",
    subject: "现金",
    type: "large",
    defaultThreshold: 50000,
    defaultCutoffDays: 7,
    description: "从序时账或现金日记账中筛选库存现金相关大额收支备选样本。",
    reviewPoints: [
      "重点抽查金额较大的库存现金收支。",
      "关注现金日记账中对方科目异常、摘要用途不清或与经营活动不匹配的记录。",
      "系统只生成备选样本，原始凭证完整性、审批和业务真实性仍需人工复核。",
    ],
  },
  {
    id: "cash-cutoff",
    name: "现金截止测试",
    subject: "现金",
    type: "cutoff",
    defaultThreshold: 0,
    defaultCutoffDays: 7,
    description: "从序时账或现金日记账中筛选资产负债表日前后现金收支备选样本。",
    reviewPoints: [
      "选取资产负债表日前后若干日的大额现金收支凭证。",
      "复核业务发生日期、原始凭证日期和记账日期是否跨期。",
      "关注收入、费用、往来款跨期，以及期末前后现金收支异常集中或频繁一收一支。",
    ],
  },
  {
    id: "bank-large",
    name: "银行存款大额收支检查",
    subject: "银行存款",
    type: "large",
    defaultThreshold: 100000,
    defaultCutoffDays: 7,
    description: "从序时账中筛选银行存款相关大额收支备选样本。",
    reviewPoints: [
      "优先关注基本户、主要一般户、交易频率高或发生额大的账户。",
      "选取金额较大、收支金额相同或频繁转入转出的交易。",
      "摘要异常、用途不清、疑似关联方或个人账户往来只能提示复核，不能由系统直接下结论。",
    ],
  },
  {
    id: "bank-cutoff",
    name: "银行存款截止测试",
    subject: "银行存款",
    type: "cutoff",
    defaultThreshold: 0,
    defaultCutoffDays: 7,
    description: "从序时账中筛选资产负债表日前后银行存款收支备选样本。",
    reviewPoints: [
      "以资产负债表日为基准，抽取前后若干日大额银行收支。",
      "后续需执行双向核对：对账单至日记账防漏记，日记账至对账单防多记。",
      "复核银行流水日期、原始凭证日期、业务发生日期和账面记账日期是否跨期。",
    ],
  },
  {
    id: "other-money-large",
    name: "其他货币资金大额收支检查",
    subject: "其他货币资金",
    type: "large",
    defaultThreshold: 100000,
    defaultCutoffDays: 7,
    description: "从序时账中筛选其他货币资金相关大额收支备选样本。",
    reviewPoints: [
      "重点关注保证金、票据、信用证、信用卡、存出投资款等大额变动。",
      "关注期末大额转入、期后转出、长期挂账或与银行存款频繁互转的记录。",
      "受限、质押、冻结、解付等事项只作为人工复核提示，不自动形成审计结论。",
    ],
  },
  {
    id: "other-money-cutoff",
    name: "其他货币资金截止测试",
    subject: "其他货币资金",
    type: "cutoff",
    defaultThreshold: 0,
    defaultCutoffDays: 7,
    description: "从序时账中筛选资产负债表日前后其他货币资金收支备选样本。",
    reviewPoints: [
      "抽取资产负债表日前后其他货币资金的大额借方、贷方发生额。",
      "关注保证金缴存或解除、票据到期或解付、信用证保证金变动是否跨期。",
      "复核银行证明、票据清单、合同协议和账面记录日期是否一致。",
    ],
  },
];

const cashMaterialOptions = [
  "科目余额表",
  "总账",
  "明细账",
  "序时账",
  "现金日记账",
  "其他资料",
];

const cashDenominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1];

const materialAliasMap = {
  总账或明细账: ["总账", "明细账"],
  上年审定数或本期期初余额: ["科目余额表"],
  银行存款明细账: ["明细账"],
  现金明细账: ["明细账"],
  银行流水或银行对账单: ["银行对账单"],
  "资产负债表日前后银行流水或对账单": ["银行对账单"],
  资产负债表日前后银行流水: ["银行对账单"],
  银行流水: ["银行对账单"],
  开户清单: ["已开立银行账户清单"],
  开户资料: ["已开立银行账户清单"],
  已开立银行结算账户清单: ["已开立银行账户清单"],
  销户证明: ["注销账户的销户证明或销户通知书"],
  销户证明或销户通知书: ["注销账户的销户证明或销户通知书"],
  大额现金收支记账凭证: ["序时账"],
  大额现金收支原始凭证: ["大额现金收支原始凭证"],
  大额收支记账凭证: ["序时账"],
  大额收支原始凭证: ["原始凭证"],
  大额交易对应记账凭证: ["序时账"],
  大额交易对应原始凭证: ["原始凭证"],
  大额银行收支记账凭证: ["序时账"],
  大额银行收支原始凭证: ["原始凭证"],
  记账凭证: ["序时账"],
  "合同、发票、审批单、付款申请等支持性资料": ["原始凭证"],
  转入其他账户的进账资料: ["原始凭证"],
  原始单据: ["原始凭证"],
  银行询证函及回函: ["银行对账单"],
  银行询证函: ["银行对账单"],
  银行回函: ["银行对账单"],
  回邮信封或快递资料: ["银行对账单"],
  函证过程控制记录: ["银行对账单"],
  银行地址核对资料: ["银行对账单"],
  外币现金折算资料: ["原始凭证"],
  外币银行存款折算资料: ["原始凭证"],
  银行存单: ["银行票据登记簿"],
  银企对账单: ["银行对账单"],
  盘点日现金日记账: ["现金日记账"],
  库存现金盘点表: ["库存现金盘点资料"],
  盘点签字记录: ["库存现金盘点资料"],
  资产负债表日至盘点日之间的现金收支记录: ["现金日记账"],
  资产负债表日前后现金收支凭证: ["现金收付款凭证"],
  未达账项明细: ["银行存款余额调节表"],
  未达账项期后清理资料: ["银行存款余额调节表"],
  大额或长期未达账项对应凭证: ["原始凭证"],
  企业账面银行账户记录: ["银行存款日记账"],
  "关联方、股东、员工或管理层名单": ["原始凭证"],
  资金池协议及流水: ["银行对账单"],
  受限资金明细及披露资料: ["银行对账单"],
};

const materialDetectionRules = [
  { keywords: ["科目余额", "余额表", "trial"], material: "科目余额表" },
  { keywords: ["总账", "general ledger"], material: "总账" },
  { keywords: ["明细账", "明细表", "subsidiary"], material: "明细账" },
  { keywords: ["序时账", "序时帐", "日记账", "journal"], material: "序时账" },
  { keywords: ["现金日记账"], material: "现金日记账" },
  { keywords: ["银行日记账", "银行存款日记账"], material: "银行存款日记账" },
  { keywords: ["银行对账单", "对账单", "流水", "bank statement"], material: "银行对账单" },
  { keywords: ["余额调节", "调节表"], material: "银行存款余额调节表" },
  { keywords: ["开户清单", "账户清单", "已开立银行"], material: "已开立银行账户清单" },
  { keywords: ["企业信用报告", "信用报告"], material: "企业信用报告" },
  { keywords: ["银行票据", "票据登记"], material: "银行票据登记簿" },
  { keywords: ["销户", "注销账户"], material: "注销账户的销户证明或销户通知书" },
  { keywords: ["库存现金盘点", "现金盘点"], material: "库存现金盘点资料" },
  { keywords: ["现金收付款", "收付款凭证"], material: "现金收付款凭证" },
  { keywords: ["现金支票", "支票登记"], material: "现金支票登记簿及存根联" },
  { keywords: ["大额现金", "现金大额"], material: "大额现金收支业务对应原始凭证" },
  { keywords: ["原始凭证", "发票", "合同", "审批"], material: "原始凭证" },
];

const cashWorkpaperTemplates = [
  {
    id: "company",
    name: "公司财审空白底稿模板",
    file: "templates/自己公司的财审空白底稿模版.xlsx",
    description: "12 张货币资金相关底稿，来自公司财审空白底稿模板。",
    workpapers: [
      {
        name: "货币资金审定表",
        objective: "汇总库存现金、银行存款和其他货币资金余额，核对总账、明细账和科目余额表是否一致。",
        materials: ["科目余额表", "总账或明细账", "现金日记账", "银行存款日记账"],
        alerts: ["缺少余额表或明细账时，不能支持货币资金期末余额。", "账表不一致时，需要记录差异原因并人工复核。"],
      },
      {
        name: "现金监盘记录及追溯表",
        objective: "记录库存现金监盘结果，并在盘点日不是资产负债表日时倒推或顺推至报表日。",
        materials: ["库存现金盘点表", "盘点日现金日记账", "盘点签字记录", "现金日记账"],
        alerts: ["缺少签字记录时，监盘证据可靠性不足。", "未倒推至资产负债表日时，不能直接确认期末现金余额。"],
      },
      {
        name: "现金大额收支抽查表",
        objective: "抽查大额现金收支是否有原始凭证支持，业务内容是否合理并记录在恰当期间。",
        materials: ["现金日记账", "大额收支记账凭证", "大额收支原始凭证"],
        alerts: ["大额现金收支缺少原始凭证时，需要补充检查。", "频繁一收一支或用途不清时，应提示异常交易。"],
      },
      {
        name: "现金收支截止性测试",
        objective: "检查资产负债表日前后现金收支是否记录在正确会计期间。",
        materials: ["现金日记账", "资产负债表日前后现金收支凭证", "大额收支原始凭证"],
        alerts: ["缺少日前后凭证时，无法判断现金收支是否跨期。"],
      },
      {
        name: "银行存款测试表",
        objective: "按银行账户核对账面记录、银行对账单和函证结果，关注账户完整性和余额真实性。",
        materials: ["科目余额表", "总账或明细账", "银行存款日记账", "银行对账单", "银行回函"],
        alerts: ["缺少银行对账单或回函时，银行存款外部证据不足。", "账户名义或金额不一致时，需要人工调查差异。"],
      },
      {
        name: "存款余额调节表",
        objective: "检查余额调节表加计、调节后余额和未达账项性质，识别大额或长期未达事项。",
        materials: ["银行对账单", "银行存款余额调节表", "银行存款日记账"],
        alerts: ["缺少余额调节表时，无法检查未达账项。", "长期未达账项可能提示跨期或账务处理不规范。"],
      },
      {
        name: "银行存款大额收支抽查表",
        objective: "从银行流水和日记账双向抽取大额或异常交易，检查凭证和业务合理性。",
        materials: ["银行对账单", "银行存款日记账", "大额收支记账凭证", "大额收支原始凭证"],
        alerts: ["大额资金转入关联方或个人账户时，应提示资金占用风险。", "缺少凭证时，不能判断交易真实性和合理性。"],
      },
      {
        name: "银行存款收支截止性测试",
        objective: "检查资产负债表日前后银行收支的银行流水日期、凭证日期和记账日期是否匹配。",
        materials: ["资产负债表日前后银行流水", "银行存款日记账", "大额收支原始凭证"],
        alerts: ["缺少日前后银行流水时，无法判断银行收支截止是否正确。"],
      },
      {
        name: "其他货币资金测试表",
        objective: "检查保证金、存出投资款等其他货币资金的性质、权属、受限情况和列报。",
        materials: ["科目余额表", "总账或明细账", "银行对账单", "开户资料", "调节表"],
        alerts: ["存在保证金或受限资金时，应关注列报和披露。"],
      },
      {
        name: "其他货币资金大额收支抽查表",
        objective: "抽查其他货币资金的大额收支，检查凭证、交易背景和资金权属是否清楚。",
        materials: ["总账或明细账", "银行对账单", "大额收支记账凭证", "大额收支原始凭证"],
        alerts: ["其他货币资金大额收支缺少凭证时，不能判断交易真实性。", "保证金、存出投资款等用途不清时，应提示人工复核。"],
      },
      {
        name: "其他货币资金收支截止性测试",
        objective: "检查其他货币资金相关收支是否记录在恰当期间。",
        materials: ["资产负债表日前后银行流水", "总账或明细账", "大额收支原始凭证"],
        alerts: ["缺少日前后流水或原始单据时，不能判断是否存在跨期。"],
      },
    ],
  },
  {
    id: "shinewing",
    name: "信永中和 G1000 货币资金模板",
    file: "templates/信永中和标准化底稿空白模版2022年/G1000-货币资金.xlsx",
    description: "32 个 sheet，来自 G1000-货币资金.xlsx，页面分页展示。",
    workpapers: [
      {
        name: "底稿目录",
        objective: "列示 G1000 货币资金模板包含的全部底稿索引，便于审计人员定位工作表。",
        materials: ["科目余额表"],
        alerts: ["目录只用于索引，不替代具体审计程序和证据检查。"],
      },
      {
        name: "G0000-0-0审计程序",
        objective: "列示货币资金审计程序，覆盖现金、银行存款、其他货币资金、函证和截止测试。",
        materials: ["科目余额表", "总账或明细账"],
        alerts: ["程序表不能直接形成审计结论，仍需底稿和证据支持。"],
      },
      {
        name: "G0000-0-1审定表",
        objective: "汇总货币资金审定金额，与报表数、总账数和明细表进行核对。",
        materials: ["科目余额表", "总账或明细账", "银行存款日记账", "现金日记账"],
        alerts: ["审定表金额来源不完整时，不能支持期末余额确认。"],
      },
      {
        name: "G0000-1-1披露表(国资)",
        objective: "用于国资披露相关信息整理，关注货币资金列报披露是否完整。",
        materials: ["科目余额表", "受限资金明细及披露资料"],
        alerts: ["存在受限资金但缺少披露资料时，应提示列报风险。"],
      },
      {
        name: "G1000-0现金审定表",
        objective: "汇总库存现金审定金额，核对现金日记账、总账和科目余额表。",
        materials: ["科目余额表", "总账或明细账", "现金日记账"],
        alerts: ["缺少现金日记账时，现金余额不能完成账面核对。"],
      },
      {
        name: "G1000-1现金明细表",
        objective: "列示现金明细，检查明细账与总账、科目余额表是否一致。",
        materials: ["科目余额表", "总账或明细账", "现金日记账"],
        alerts: ["现金明细与总账不一致时，需要记录差异原因。"],
      },
      {
        name: "G1101监盘计划及小结",
        objective: "记录库存现金监盘计划、时间安排、参加人员和监盘小结。",
        materials: ["库存现金盘点表", "盘点签字记录"],
        alerts: ["缺少监盘计划或签字记录时，监盘过程证据不足。"],
      },
      {
        name: "G1102库存现金监盘情况明细表",
        objective: "记录库存现金盘点明细，支持监盘结论。",
        materials: ["库存现金盘点表", "盘点日现金日记账", "盘点签字记录"],
        alerts: ["盘点明细缺失时，无法复核现金实存数。"],
      },
      {
        name: "G1102库存现金监盘表",
        objective: "记录库存现金监盘结果，并追溯或顺推至资产负债表日。",
        materials: ["库存现金盘点表", "盘点日现金日记账", "盘点签字记录", "现金日记账"],
        alerts: ["盘点日不是资产负债表日时，必须执行追溯或顺推。"],
      },
      {
        name: "G1200现金合理性分析表（不适用则隐藏）",
        objective: "分析库存现金余额和发生额是否合理，识别异常现金持有或收支。",
        materials: ["现金日记账", "总账或明细账"],
        alerts: ["现金余额异常偏大时，需要解释原因。"],
      },
      {
        name: "G1200-1 住宅现金合理性分析",
        objective: "针对特定场景的现金合理性分析，判断是否适用并保留说明。",
        materials: ["现金日记账", "总账或明细账"],
        alerts: ["不适用时也应保留隐藏或不适用说明。"],
      },
      {
        name: "G1300现金抽凭-检查表",
        objective: "抽查现金收支凭证，检查原始凭证、审批和账务处理。",
        materials: ["现金日记账", "大额收支记账凭证", "大额收支原始凭证"],
        alerts: ["现金抽凭缺少原始单据时，需要补充资料。"],
      },
      {
        name: "G1400-现金截止性测试",
        objective: "检查资产负债表日前后现金收支是否记录于正确期间。",
        materials: ["现金日记账", "资产负债表日前后现金收支凭证"],
        alerts: ["缺少日前后现金凭证时，无法判断截止性。"],
      },
      {
        name: "G2000-0银行存款审定表",
        objective: "汇总银行存款审定金额，核对报表数、总账数和明细表。",
        materials: ["科目余额表", "总账或明细账", "银行存款日记账", "银行对账单"],
        alerts: ["银行账户余额缺少外部证据时，审定金额不能直接确认。"],
      },
      {
        name: "G2000-1银行存款明细表",
        objective: "按银行账户列示余额和发生额，核对账面记录与银行资料。",
        materials: ["银行存款日记账", "银行对账单", "已开立银行结算账户清单"],
        alerts: ["明细表未覆盖全部账户时，存在完整性风险。"],
      },
      {
        name: "G2100银行账户完整性检查",
        objective: "核对开户清单、银行对账单和账面账户，识别零余额、销户和账外账户。",
        materials: ["已开立银行结算账户清单", "开户资料", "销户证明", "银行对账单", "企业信用报告"],
        alerts: ["未获取开户清单时，无法判断银行账户完整性。"],
      },
      {
        name: "G2200银行存单检查表",
        objective: "检查银行存单真实性、权属、期限和是否存在质押或受限。",
        materials: ["银行存单", "银行回函", "受限资金明细及披露资料"],
        alerts: ["存单质押或受限未披露时，应提示列报风险。"],
      },
      {
        name: "G2300银行存款分析",
        objective: "分析银行存款余额和发生额波动，关注异常资金变动。",
        materials: ["银行存款日记账", "银行对账单", "科目余额表"],
        alerts: ["大额异常波动需要进一步检查交易背景。"],
      },
      {
        name: "G2400外币银行存款核查表",
        objective: "检查外币银行存款余额、汇率折算和汇兑损益处理。",
        materials: ["银行对账单", "外币账户折算资料", "总账或明细账"],
        alerts: ["外币折算资料缺失时，不能复核计价准确性。"],
      },
      {
        name: "G2500银行函证策略",
        objective: "确定银行函证范围、方式和重点账户。",
        materials: ["已开立银行结算账户清单", "银行对账单", "银行询证函"],
        alerts: ["函证范围未覆盖零余额或销户账户时，需要说明理由。"],
      },
      {
        name: "G2510银行函证控制表",
        objective: "记录银行函证寄发、回函、差异处理和过程控制证据。",
        materials: ["银行询证函", "银行回函", "回邮信封或快递资料", "函证过程控制记录"],
        alerts: ["回函由客户转交或缺少过程控制资料时，函证可靠性不足。"],
      },
      {
        name: "G2600银行存款余额与利息收入匹配分析（不适用则隐藏）",
        objective: "检查银行存款余额与利息收入是否匹配，识别异常或遗漏。",
        materials: ["银行对账单", "银行存款日记账", "银行回函"],
        alerts: ["利息收入与余额不匹配时，需要进一步分析。"],
      },
      {
        name: "G2710银行存款抽凭",
        objective: "抽查银行存款收支凭证，检查交易真实性、审批和账务处理。",
        materials: ["银行对账单", "银行存款日记账", "大额收支记账凭证", "大额收支原始凭证"],
        alerts: ["大额资金流向关联方或个人账户时，应人工复核。"],
      },
      {
        name: "G2720银企对账",
        objective: "核对银行对账单、银行日记账和余额调节表。",
        materials: ["银行对账单", "银企对账单", "银行存款余额调节表"],
        alerts: ["银企对账差异未解释时，需要跟进未达账项。"],
      },
      {
        name: "G2730大额银行收支检查",
        objective: "检查大额银行收支业务的凭证、业务背景和商业合理性。",
        materials: ["银行对账单", "大额收支记账凭证", "大额收支原始凭证"],
        alerts: ["大额资金一进一出或用途不清时，应提示异常交易。"],
      },
      {
        name: "G2740银行存款截止测试",
        objective: "检查资产负债表日前后银行收支是否记录于正确期间。",
        materials: ["资产负债表日前后银行流水", "银行存款日记账", "大额收支原始凭证"],
        alerts: ["缺少日前后银行流水时，无法判断截止性。"],
      },
      {
        name: "G2800-资金池业务检查",
        objective: "检查资金池业务安排、权属、资金归集和披露影响。",
        materials: ["资金池协议及流水", "银行回函", "受限资金明细及披露资料"],
        alerts: ["资金池资料缺失时，资金权属和披露无法判断。"],
      },
      {
        name: "G3000-0其他货币资金审定表",
        objective: "汇总其他货币资金审定金额，关注保证金、存出投资款和受限情况。",
        materials: ["科目余额表", "总账或明细账", "银行对账单", "调节表"],
        alerts: ["其他货币资金性质不清时，应提示人工复核。"],
      },
      {
        name: "G3000-1其他货币资金明细表",
        objective: "列示其他货币资金明细，核对账面记录和外部资料。",
        materials: ["总账或明细账", "银行对账单", "开户资料"],
        alerts: ["明细表未列示资金性质时，可能影响列报判断。"],
      },
      {
        name: "G3100其他货币资金抽凭",
        objective: "抽查其他货币资金收支凭证，检查交易真实性和用途。",
        materials: ["银行对账单", "大额收支记账凭证", "大额收支原始凭证"],
        alerts: ["保证金或存出投资款用途不清时，需要补充说明。"],
      },
      {
        name: "G3200其他货币资金截止测试",
        objective: "检查其他货币资金收支是否记录于恰当期间。",
        materials: ["资产负债表日前后银行流水", "总账或明细账", "大额收支原始凭证"],
        alerts: ["缺少日前后流水或原始单据时，不能判断是否跨期。"],
      },
      {
        name: "G4000受限资金对现金流量表的影响检查表",
        objective: "检查受限资金对现金流量表和列报披露的影响。",
        materials: ["受限资金明细及披露资料", "银行回函", "科目余额表"],
        alerts: ["受限资金未披露或现金流量表处理不清时，应提示复核。"],
      },
    ],
  },
];

const workpaperState = {
  templateId: "company",
  selectedWorkpaperIndex: 0,
  editorWorkpaperIndex: 0,
  page: 0,
  auditYear: "",
  auditCutoffDate: "",
  auditPeriodManuallyEdited: false,
  providedMaterials: new Set(),
  uploadedFiles: [],
  recognitionStatus: {
    statement: "none",
    reconciliation: "none",
  },
  bankSupportItems: {
    statement: [],
    reconciliation: [],
  },
  bankLocalFiles: {
    trialBalance: null,
    statement: [],
    reconciliation: [],
    largeTransactions: [],
    cutoffTransactions: [],
  },
  cashSupportFiles: [],
  cashLargeSourceFiles: [],
  cashCutoffSourceFiles: [],
  cashCountData: {
    countDate: "",
    previousBookBalance: "",
    unrecordedIncome: "",
    unrecordedPayment: "",
    reportToCountPayment: "",
    reportToCountIncome: "",
    whiteNoteCount: "",
    whiteNoteAmount: "",
    differenceReason: "",
    denominations: Object.fromEntries(cashDenominations.map((amount) => [String(amount), ""])),
  },
  otherMonetarySupportFiles: [],
  sharedFiles: {
    trialBalance: null,
  },
  samplingActiveTaskId: "cash-large",
  samplingReturnTargetId: "",
  samplingTasks: Object.fromEntries(
    samplingTasks.map((task) => [
      task.id,
      {
        amountThreshold: String(task.defaultThreshold),
        cutoffDate: "",
        cutoffDays: String(task.defaultCutoffDays),
        keywords: "",
        candidates: [],
        confirmed: [],
        status: "未生成",
      },
    ]),
  ),
  bankAccounts: [
    {
      bankName: "",
      accountNo: "",
      endingBalance: "",
      hasStatement: "auto",
      reconciliationStatus: "pending",
      confirmationStatus: "should",
      adjustmentDebit: "",
      adjustmentCredit: "",
    },
  ],
  cashLargeTransactions: [],
  cashLargeTransactionPage: 0,
  cashCutoffTransactions: [],
  cashCutoffTransactionPage: 0,
  cashCutoffDate: "",
  bankLargeTransactions: [],
  bankLargeTransactionPage: 0,
  bankCutoffTransactions: [],
  bankCutoffTransactionPage: 0,
  bankCutoffDate: "",
  otherMonetaryItems: [],
  otherMonetaryLargeTransactions: [],
  otherMonetaryLargeTransactionPage: 0,
  otherMonetaryCutoffTransactions: [],
  otherMonetaryCutoffTransactionPage: 0,
  otherMonetaryCutoffDate: "",
};

const otherMonetaryReviewNotes = {
  银行汇票: "需复核回函/票据清单、未达项及期后兑付。",
  银行本票: "需复核回函/本票清单、未达项及期后兑付。",
  信用卡: "需复核对账单、消费明细、授权审批及异常支出。",
  信用证保证金: "需复核回函/保证金协议、受限用途及期后释放。",
  外埠存款: "需复核回函/对账单、外埠用途、长期挂账及期后结清。",
};

const otherMonetaryGeneralReviewNote =
  "本表仅作金额匹配和调节勾稽。金额相符后仍需人工复核外部资料、未达性质、期后清理、受限资金及列报披露；如属漏记、错记或跨期事项，应考虑审计调整。";

const subjectData = {
  货币资金: {
    title: "货币资金审计概览",
    description:
      "当前科目先以货币资金为试点，覆盖库存现金、银行存款、其他货币资金、函证、余额调节表和截止测试。",
    template: "默认模板：公司财审空白底稿",
    flow: [
      "获取科目余额表、明细账、日记账和银行资料。",
      "核对账表、银行对账单和余额调节表。",
      "执行函证、抽凭、截止测试和异常事项跟进。",
      "汇总检查异常，形成补充资料清单和复核建议。",
    ],
    risks: [
      "银行账户是否完整，是否存在账外账户。",
      "是否存在受限资金、保证金或资金池业务。",
      "未达账项是否长期未清，函证是否能覆盖主要账户。",
    ],
    materials: [
      "科目余额表",
      "总账 / 明细账 / 日记账",
      "银行对账单",
      "余额调节表",
      "开户清单",
      "银行询证函及回函",
      "现金盘点表",
      "大额收支凭证",
    ],
  },
  应收账款: {
    title: "应收账款审计概览",
    description:
      "应收账款重点关注余额真实性、账龄结构、函证回函、期后回款和坏账准备计提是否充分。",
    template: "默认模板：公司财审空白底稿",
    flow: [
      "获取应收账款明细表、账龄表、客户清单和期后回款记录。",
      "核对应收明细表与总账、科目余额表是否一致。",
      "执行函证、替代测试和期后回款检查。",
      "结合账龄、回款和争议事项判断坏账准备是否充分。",
    ],
    risks: [
      "长账龄余额是否异常，是否存在长期挂账。",
      "重大客户余额是否回函，未回函是否执行替代程序。",
      "期后回款是否支持余额存在性，坏账准备是否充分。",
    ],
    materials: [
      "科目余额表",
      "应收账款明细表",
      "账龄分析表",
      "客户对账单",
      "应收账款询证函及回函",
      "期后回款银行流水",
      "坏账准备计算表",
      "合同 / 发票 / 出库或验收资料",
    ],
  },
  预收账款: {
    title: "预收账款审计概览",
    description:
      "预收账款重点关注款项性质、收入确认时点、重分类和期后履约情况。",
    template: "默认模板：公司财审空白底稿",
    flow: [
      "获取预收账款明细表、合同台账和期后履约资料。",
      "核对预收余额与总账、明细账和银行收款记录。",
      "检查是否存在应重分类至合同负债或收入的项目。",
      "结合期后发货、开票或服务完成情况判断列报是否恰当。",
    ],
    risks: [
      "预收款项是否实质为合同负债或其他往来。",
      "是否存在已满足收入确认条件但仍挂预收的情况。",
      "大额长期预收是否缺少合同或履约支持。",
    ],
    materials: [
      "科目余额表",
      "预收账款明细表",
      "销售合同 / 订单",
      "收款银行流水",
      "发票开具记录",
      "期后发货或验收资料",
      "客户对账资料",
      "重分类判断说明",
    ],
  },
  固定资产: {
    title: "固定资产审计概览",
    description:
      "固定资产重点关注资产存在、权属、折旧计提、增减变动和减值迹象。",
    template: "默认模板：公司财审空白底稿",
    flow: [
      "获取固定资产卡片、明细表、折旧计算表和盘点资料。",
      "核对固定资产明细与总账、科目余额表是否一致。",
      "检查本期新增、减少和大额资产凭证。",
      "复核折旧政策、折旧计算和减值迹象。",
    ],
    risks: [
      "账面资产是否真实存在，是否存在闲置或毁损资产。",
      "新增资产是否有合同、发票、验收和付款资料。",
      "折旧年限、残值率和减值判断是否合理。",
    ],
    materials: [
      "科目余额表",
      "固定资产明细表",
      "固定资产卡片",
      "折旧计算表",
      "盘点表",
      "购置合同 / 发票 / 验收单",
      "处置审批及收款资料",
      "产权或权属证明",
    ],
  },
  存货: {
    title: "存货审计概览",
    description:
      "存货重点关注数量真实性、计价准确性、跌价准备和截止性。",
    template: "默认模板：公司财审空白底稿",
    flow: [
      "获取存货明细表、盘点表、收发存记录和成本计算资料。",
      "核对存货明细与总账、科目余额表是否一致。",
      "执行监盘、抽盘、计价测试和截止测试。",
      "结合库龄、售价和可变现净值判断跌价准备。",
    ],
    risks: [
      "盘点差异是否解释充分，账实是否一致。",
      "存货计价方法是否一致，成本归集是否正确。",
      "滞销、毁损或库龄较长存货是否计提跌价准备。",
    ],
    materials: [
      "科目余额表",
      "存货明细表",
      "盘点计划和盘点表",
      "收发存明细",
      "采购合同 / 入库单 / 发票",
      "成本计算表",
      "库龄分析表",
      "跌价准备测算表",
    ],
  },
  收入成本: {
    title: "收入成本审计概览",
    description:
      "收入成本重点关注收入确认、截止性、毛利异常和成本配比。",
    template: "默认模板：公司财审空白底稿",
    flow: [
      "获取收入成本明细表、合同台账、发票和出库或验收资料。",
      "核对收入成本明细与总账、报表项目是否一致。",
      "执行收入截止测试、合同抽查和毛利分析。",
      "检查收入确认依据和成本结转是否匹配。",
    ],
    risks: [
      "是否存在提前或延后确认收入。",
      "收入确认是否缺少合同、验收或交付依据。",
      "毛利率异常波动是否有合理解释。",
    ],
    materials: [
      "科目余额表",
      "收入成本明细表",
      "销售合同 / 订单",
      "发票清单",
      "出库单 / 验收单 / 签收单",
      "成本结转明细",
      "期后退货资料",
      "毛利分析表",
    ],
  },
};

const projectStorageKey = "auditmind-projects-v1";
const currentProjectStorageKey = "auditmind-current-project-id-v1";

const projectState = {
  projects: loadProjects(),
  currentProjectId: localStorage.getItem(currentProjectStorageKey) || "",
  page: 0,
  pageSize: 8,
};

const templateDefaultsStorageKey = "auditmind-template-defaults-v1";
const hiddenTemplatesStorageKey = "auditmind-hidden-templates-v1";

const templateCategoryLabels = {
  "workpaper-suite": "财审底稿套装",
  "bank-confirmation": "银行询证函",
  "counterparty-confirmation": "往来询证函",
};

const managedTemplates = [
  {
    id: "company-workpaper-suite",
    name: "本公司财审底稿模板",
    category: "workpaper-suite",
    format: "xlsx",
    source: "系统内置",
    path: "templates/自己公司的财审空白底稿模版.xlsx",
    scope: "全科目财务报表审计底稿套装",
    scenario: "当前货币资金工作流已接入，后续可扩展到其他科目。",
    defaultGroup: "workpaper-suite",
    linkage: "在审计工作台选择底稿模板后，用于生成底稿副本，不覆盖原始模板。",
  },
  {
    id: "shinewing-workpaper-suite",
    name: "信永中和标准化底稿模板 2022",
    category: "workpaper-suite",
    format: "文件夹模板包",
    source: "系统内置",
    path: "templates/信永中和标准化底稿空白模版2022年",
    scope: "全科目财务报表审计底稿套装",
    scenario: "用于展示支持不同事务所底稿体系，后续可逐步接入自动填制。",
    defaultGroup: "workpaper-suite",
    linkage: "作为另一套底稿模板体系供项目选择，当前不逐个展示科目文件。",
  },
  {
    id: "bank-confirmation-standard",
    name: "银行询证函模板",
    category: "bank-confirmation",
    format: "docx",
    source: "系统内置",
    path: "templates/各类账户询证函空白模板/审计业务银行询证函 - 函证一期 - 通用格式.docx",
    scope: "银行存款、借款、担保等银行函证场景",
    scenario: "后续可从银行账户清单、银行存款测试表带出银行名称、账号和余额。",
    defaultGroup: "bank-confirmation",
    linkage: "用于银行函证中心生成询证函副本，自动填制后仍需人工复核。",
  },
  {
    id: "counterparty-confirmation-standard",
    name: "企业往来询证函模板",
    category: "counterparty-confirmation",
    format: "doc",
    source: "系统内置",
    path: "templates/各类账户询证函空白模板/企业往来询证函-（普通版）.doc",
    scope: "应收、应付、预收、预付等往来函证场景",
    scenario: "后续可从往来明细带出客户或供应商名称、余额和函证金额。",
    defaultGroup: "counterparty-confirmation",
    linkage: "用于往来函证中心生成询证函副本，不直接替代审计人员判断。",
  },
];

const templateState = {
  activeFilter: "all",
  selectedTemplateId: "company-workpaper-suite",
  defaults: loadTemplateDefaults(),
  hiddenTemplateIds: loadHiddenTemplates(),
};

function getOnlineDemoMessage() {
  return "当前是在线展示版。为保护审计资料和 API Key，文件解析、AI 整理和 Excel 导出请在本地演示版中使用。";
}

function renderOnlineKnowledgeDemo() {
  if (knowledgeDocumentList) {
    knowledgeDocumentList.innerHTML = `
      <div class="empty-gap">
        在线展示版不读取本地知识库文件。完整 RAG 检索、引用依据和 AI 整理回答会在本地演示视频中展示。
      </div>
    `;
  }

  if (knowledgeStatus) {
    knowledgeStatus.textContent = "在线展示版已隐藏真实知识库接口。";
  }

  if (knowledgeAnswer) {
    knowledgeAnswer.innerHTML = `
      <p class="note-title">演示模式</p>
      <p>${getOnlineDemoMessage()}</p>
      <p>正式演示时，系统会先检索本地 Markdown 知识库，再输出带引用、可人工复核的回答。</p>
    `;
  }
}

landingStartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.dataset.view = "app";
    showPage("overview", "工作台总览");
  });
});

landingDemoJumpButton?.addEventListener("click", () => {
  landingFeatureSection?.scrollIntoView({ behavior: "smooth" });
});

brandHomeButton?.addEventListener("click", () => {
  document.body.dataset.view = "landing";
  document.body.dataset.currentPage = "overview";
  document.querySelector("#landing-hero")?.scrollIntoView({ behavior: "smooth" });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.35 },
  );

  revealSections.forEach((section) => revealObserver.observe(section));
} else {
  revealSections.forEach((section) => section.classList.add("is-visible"));
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetPage = item.dataset.page;
    const title = item.childNodes[item.childNodes.length - 1].textContent.trim();

    showPage(targetPage, title);
    item.classList.add("active");
  });
});

newProjectShortcutButton?.addEventListener("click", () => {
  openNewProjectForm();
});

projectForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveProjectFromForm();
});

resetProjectFormButton?.addEventListener("click", () => {
  resetProjectForm();
});

projectPrevPageButton?.addEventListener("click", () => {
  if (projectState.page <= 0) {
    return;
  }

  projectState.page -= 1;
  renderProjects();
});

projectNextPageButton?.addEventListener("click", () => {
  const totalPages = getProjectTotalPages();

  if (projectState.page >= totalPages - 1) {
    return;
  }

  projectState.page += 1;
  renderProjects();
});

projectList?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-project-action]");

  if (!button) {
    return;
  }

  const projectId = button.dataset.projectId;
  const action = button.dataset.projectAction;

  if (action === "edit") {
    editProject(projectId);
  }

  if (action === "activate") {
    activateProject(projectId);
  }

  if (action === "delete") {
    deleteProject(projectId);
  }
});

templateFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    templateState.activeFilter = button.dataset.templateFilter || "all";
    templateFilterButtons.forEach((filterButton) => filterButton.classList.remove("active"));
    button.classList.add("active");
    renderTemplateManagement();
  });
});

templateTable?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-template-action]");

  if (!button) {
    const row = event.target.closest("[data-template-id]");

    if (row) {
      templateState.selectedTemplateId = row.dataset.templateId;
      renderTemplateManagement();
    }
    return;
  }

  const templateId = button.dataset.templateId;
  const action = button.dataset.templateAction;

  if (action === "default") {
    setDefaultTemplate(templateId);
  }

  if (action === "delete") {
    hideTemplate(templateId);
  }
});

document.addEventListener(
  "wheel",
  (event) => {
    if (event.target instanceof HTMLInputElement && event.target.type === "number") {
      event.target.blur();
    }
  },
  { passive: true },
);

generateWorkpaperButton?.addEventListener("click", () => {
  showPage("workpaper", "底稿生成");
});

backWorkspaceButton?.addEventListener("click", () => {
  showPage("workspace", "审计工作台");
  document.querySelector('[data-page="workspace"]')?.classList.add("active");
});

subjectSelect?.addEventListener("change", () => {
  renderSubject(subjectSelect.value);
});

prevWorkpaperPageButton?.addEventListener("click", () => {
  if (workpaperState.page === 0) {
    return;
  }
  workpaperState.page -= 1;
  workpaperState.selectedWorkpaperIndex = workpaperState.page * workpapersPerPage;
  renderWorkpaperBuilder();
});

nextWorkpaperPageButton?.addEventListener("click", () => {
  const totalPages = Math.ceil(getActiveTemplate().workpapers.length / workpapersPerPage);

  if (workpaperState.page >= totalPages - 1) {
    return;
  }
  workpaperState.page += 1;
  workpaperState.selectedWorkpaperIndex = workpaperState.page * workpapersPerPage;
  renderWorkpaperBuilder();
});

exportWorkpaperCopyButton?.addEventListener("click", async () => {
  await exportWorkpaperCopy();
});

auditYearInput?.addEventListener("input", () => {
  const rawYear = String(auditYearInput.value || "").replace(/\D/g, "").slice(0, 4);
  const year = normalizeAuditYear(rawYear);

  if (auditYearInput.value !== rawYear) {
    auditYearInput.value = rawYear;
  }

  workpaperState.auditYear = rawYear;

  if (year) {
    workpaperState.auditPeriodManuallyEdited = true;
    workpaperState.auditCutoffDate = `${year}-12-31`;
  } else {
    workpaperState.auditPeriodManuallyEdited = false;
    workpaperState.auditCutoffDate = "";
  }

  syncAuditPeriodInputs();
});

auditCutoffDateInput?.addEventListener("input", () => {
  workpaperState.auditPeriodManuallyEdited = true;
  workpaperState.auditCutoffDate = auditCutoffDateInput.value;
  const year = getYearFromDateInput(auditCutoffDateInput.value);
  workpaperState.auditYear = year ? String(year) : workpaperState.auditYear;
  syncAuditPeriodInputs();
});

auditFileInput?.addEventListener("change", () => {
  const file = auditFileInput.files?.[0];
  const suggestedMaterial = file ? detectMaterialType(file.name) : "";

  selectedFileName.textContent = file
    ? `${file.name}（${formatFileSize(file.size)}）`
    : "尚未选择文件";

  if (suggestedMaterial && materialTypeSelect) {
    materialTypeSelect.value = suggestedMaterial;
    uploadHint.textContent = `系统根据文件名建议资料类型为“${suggestedMaterial}”，请确认是否正确。`;
  } else if (materialTypeSelect) {
    materialTypeSelect.value = "";
    uploadHint.textContent = "系统暂未根据文件名识别出资料类型，请手动选择后确认。";
  }
});

confirmMaterialUploadButton?.addEventListener("click", () => {
  confirmMaterialUpload();
});

refreshKnowledgeButton?.addEventListener("click", async () => {
  await loadKnowledgeDocuments();
});

askKnowledgeButton?.addEventListener("click", async () => {
  await askKnowledgeBase();
});

askKnowledgeAiButton?.addEventListener("click", async () => {
  await askKnowledgeBaseWithAi();
});

knowledgeQuestionInput?.addEventListener("keydown", async (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    await askKnowledgeBase();
  }
});

generateSamplingCandidatesButton?.addEventListener("click", async () => {
  await generateSamplingCandidates();
});

confirmSamplingSamplesButton?.addEventListener("click", () => {
  confirmSelectedSamplingSamples();
});

returnSamplingToWorkpaperButton?.addEventListener("click", () => {
  returnSamplingSamplesToWorkpaper();
});

[samplingAmountThresholdInput, samplingCutoffDateInput, samplingCutoffDaysInput, samplingKeywordsInput].forEach(
  (input) => {
    input?.addEventListener("input", () => {
      updateActiveSamplingRuleFromInputs();
    });
  },
);

backWorkpaperBuilderButton?.addEventListener("click", () => {
  showPage("workpaper", "底稿生成");
});

addBankAccountRowButton?.addEventListener("click", () => {
  workpaperState.bankAccounts.push({
    bankName: "",
    accountNo: "",
    endingBalance: "",
    hasStatement: "auto",
    reconciliationStatus: "pending",
    confirmationStatus: "should",
    adjustmentDebit: "",
    adjustmentCredit: "",
  });
  renderBankAccountRows();
});

addCashLargeTransactionRowButton?.addEventListener("click", () => {
  workpaperState.cashLargeTransactions.push(createEmptyLargeTransactionRow());
  workpaperState.cashLargeTransactionPage = getLastLargeTransactionPage(
    workpaperState.cashLargeTransactions,
  );
  renderCashLargeTransactionRows();
});

addCashCutoffRowButton?.addEventListener("click", () => {
  workpaperState.cashCutoffTransactions.push(createEmptyCutoffTransactionRow());
  workpaperState.cashCutoffTransactionPage = getLastLargeTransactionPage(
    workpaperState.cashCutoffTransactions,
  );
  renderCashCutoffTransactionRows();
});

addBankLargeTransactionRowButton?.addEventListener("click", () => {
  workpaperState.bankLargeTransactions.push(createEmptyLargeTransactionRow());
  workpaperState.bankLargeTransactionPage = getLastLargeTransactionPage(
    workpaperState.bankLargeTransactions,
  );
  renderBankLargeTransactionRows();
});

addBankCutoffRowButton?.addEventListener("click", () => {
  workpaperState.bankCutoffTransactions.push(createEmptyCutoffTransactionRow());
  workpaperState.bankCutoffTransactionPage = getLastLargeTransactionPage(
    workpaperState.bankCutoffTransactions,
  );
  renderBankCutoffTransactionRows();
});

addOtherMonetaryRowButton?.addEventListener("click", () => {
  workpaperState.otherMonetaryItems.push(createEmptyOtherMonetaryItem());
  renderOtherMonetaryRows();
});

addOtherMonetaryLargeTransactionRowButton?.addEventListener("click", () => {
  workpaperState.otherMonetaryLargeTransactions.push(createEmptyLargeTransactionRow());
  workpaperState.otherMonetaryLargeTransactionPage = getLastLargeTransactionPage(
    workpaperState.otherMonetaryLargeTransactions,
  );
  renderOtherMonetaryLargeTransactionRows();
});

addOtherMonetaryCutoffRowButton?.addEventListener("click", () => {
  workpaperState.otherMonetaryCutoffTransactions.push(createEmptyCutoffTransactionRow());
  workpaperState.otherMonetaryCutoffTransactionPage = getLastLargeTransactionPage(
    workpaperState.otherMonetaryCutoffTransactions,
  );
  renderOtherMonetaryCutoffTransactionRows();
});

saveBankWorkpaperButton?.addEventListener("click", async () => {
  await saveBankWorkpaperDraft(saveBankWorkpaperButton, saveWorkpaperStatus);
});

saveCashCountWorkpaperButton?.addEventListener("click", () => {
  saveBankWorkpaperDraft(saveCashCountWorkpaperButton, cashCountUploadStatus);
});

saveCashLargeTransactionsWorkpaperButton?.addEventListener("click", () => {
  saveBankWorkpaperDraft(saveCashLargeTransactionsWorkpaperButton, cashLargeTransactionsStatus);
});

saveCashCutoffWorkpaperButton?.addEventListener("click", () => {
  saveBankWorkpaperDraft(saveCashCutoffWorkpaperButton, cashCutoffStatus);
});

openBankReconciliationWorkpaperButton?.addEventListener("click", () => {
  openRelatedBankReconciliationWorkpaper();
});

openBankLargeTransactionsWorkpaperButton?.addEventListener("click", () => {
  openRelatedBankLargeTransactionsWorkpaper();
});

openBankCutoffWorkpaperButton?.addEventListener("click", () => {
  openRelatedBankCutoffWorkpaper();
});

openCashLargeTransactionsWorkpaperButton?.addEventListener("click", () => {
  openRelatedCashLargeTransactionsWorkpaper();
});

openCashCutoffWorkpaperButton?.addEventListener("click", () => {
  openRelatedCashCutoffWorkpaper();
});

openOtherMonetaryLargeTransactionsWorkpaperButton?.addEventListener("click", () => {
  openRelatedOtherMonetaryLargeTransactionsWorkpaper();
});

openOtherMonetaryCutoffWorkpaperButton?.addEventListener("click", () => {
  openRelatedOtherMonetaryCutoffWorkpaper();
});

backCashCountFromLargeWorkpaperButton?.addEventListener("click", () => {
  openRelatedCashCountWorkpaper();
});

backCashCountFromCutoffWorkpaperButton?.addEventListener("click", () => {
  openRelatedCashCountWorkpaper();
});

backBankDepositWorkpaperButton?.addEventListener("click", () => {
  openRelatedBankDepositWorkpaper();
});

backBankDepositFromLargeWorkpaperButton?.addEventListener("click", () => {
  openRelatedBankDepositWorkpaper();
});

backBankDepositFromCutoffWorkpaperButton?.addEventListener("click", () => {
  openRelatedBankDepositWorkpaper();
});

backOtherMonetaryWorkpaperButton?.addEventListener("click", () => {
  openRelatedOtherMonetaryWorkpaper();
});

backOtherMonetaryFromCutoffWorkpaperButton?.addEventListener("click", () => {
  openRelatedOtherMonetaryWorkpaper();
});

saveBankReconciliationWorkpaperButton?.addEventListener("click", async () => {
  await saveBankWorkpaperDraft(
    saveBankReconciliationWorkpaperButton,
    saveBankReconciliationStatus,
  );
});

saveBankLargeTransactionsWorkpaperButton?.addEventListener("click", async () => {
  await saveBankWorkpaperDraft(saveBankLargeTransactionsWorkpaperButton, bankLargeTransactionsStatus);
});

saveBankCutoffWorkpaperButton?.addEventListener("click", async () => {
  await saveBankWorkpaperDraft(saveBankCutoffWorkpaperButton, bankCutoffStatus);
});

saveOtherMonetaryWorkpaperButton?.addEventListener("click", async () => {
  await saveBankWorkpaperDraft(saveOtherMonetaryWorkpaperButton, saveOtherMonetaryStatus);
});

saveOtherMonetaryLargeTransactionsWorkpaperButton?.addEventListener("click", async () => {
  await saveBankWorkpaperDraft(
    saveOtherMonetaryLargeTransactionsWorkpaperButton,
    otherMonetaryLargeTransactionsStatus,
  );
});

saveOtherMonetaryCutoffWorkpaperButton?.addEventListener("click", async () => {
  await saveBankWorkpaperDraft(
    saveOtherMonetaryCutoffWorkpaperButton,
    otherMonetaryCutoffStatus,
  );
});

otherMonetarySupportInputs.forEach((input) => {
  input.addEventListener("change", () => {
    handleOtherMonetarySupportSelection(input);
  });
});

cashSupportInputs.forEach((input) => {
  input.addEventListener("change", () => {
    handleCashSupportSelection(input);
  });
});

cashCountEditor?.addEventListener("input", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.dataset.cashCountField) {
    workpaperState.cashCountData[target.dataset.cashCountField] = target.value;
    updateCashCountCalculatedDisplay();
    return;
  }

  if (target.dataset.cashDenomination) {
    workpaperState.cashCountData.denominations[target.dataset.cashDenomination] = target.value;
    updateCashCountCalculatedDisplay();
  }
});

matchOtherMonetarySupportButton?.addEventListener("click", async () => {
  await runOtherMonetarySupportMatch();
});

selectCashLargeFromSamplingButton?.addEventListener("click", () => {
  openSamplingTask("cash-large", { fromWorkpaper: true });
});

parseCashLargeTransactionsButton?.addEventListener("click", async () => {
  await parseCashLargeTransactionsFromUploads();
});

selectBankLargeFromSamplingButton?.addEventListener("click", () => {
  openSamplingTask("bank-large", { fromWorkpaper: true });
});

parseBankLargeTransactionsButton?.addEventListener("click", async () => {
  await parseBankLargeTransactionsFromUploads();
});

selectOtherMonetaryLargeFromSamplingButton?.addEventListener("click", () => {
  openSamplingTask("other-money-large", { fromWorkpaper: true });
});

parseOtherMonetaryLargeTransactionsButton?.addEventListener("click", async () => {
  await parseOtherMonetaryLargeTransactionsFromUploads();
});

selectCashCutoffFromSamplingButton?.addEventListener("click", () => {
  openSamplingTask("cash-cutoff", { fromWorkpaper: true });
});

parseCashCutoffButton?.addEventListener("click", async () => {
  await parseCashCutoffFromUploads();
});

selectBankCutoffFromSamplingButton?.addEventListener("click", () => {
  openSamplingTask("bank-cutoff", { fromWorkpaper: true });
});

parseBankCutoffButton?.addEventListener("click", async () => {
  await parseBankCutoffFromUploads();
});

selectOtherMonetaryCutoffFromSamplingButton?.addEventListener("click", () => {
  openSamplingTask("other-money-cutoff", { fromWorkpaper: true });
});

parseOtherMonetaryCutoffButton?.addEventListener("click", async () => {
  await parseOtherMonetaryCutoffFromUploads();
});

cashCutoffDateInput?.addEventListener("input", () => {
  workpaperState.cashCutoffDate = cashCutoffDateInput.value;
});

bankCutoffDateInput?.addEventListener("input", () => {
  workpaperState.bankCutoffDate = bankCutoffDateInput.value;
});

otherMonetaryCutoffDateInput?.addEventListener("input", () => {
  workpaperState.otherMonetaryCutoffDate = otherMonetaryCutoffDateInput.value;
});

bankTrialBalanceInput?.addEventListener("change", async () => {
  handleBankLocalFileSelection(bankTrialBalanceInput, "trialBalance", "科目余额表");
});

bankStatementInput?.addEventListener("change", async () => {
  handleBankLocalFileSelection(bankStatementInput, "statement", "银行对账单");
});

bankReconciliationInput?.addEventListener("change", async () => {
  handleBankLocalFileSelection(bankReconciliationInput, "reconciliation", "银行存款余额调节表");
});

bankLargeTransactionsInput?.addEventListener("change", async () => {
  handleBankLocalFileSelection(bankLargeTransactionsInput, "largeTransactions", "银行存款大额收支抽查表");
});

bankCutoffTransactionsInput?.addEventListener("change", async () => {
  handleBankLocalFileSelection(bankCutoffTransactionsInput, "cutoffTransactions", "银行存款收支截止性测试");
});

bankLocalClearButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearBankLocalFile(button.dataset.clearBankFile);
  });
});

rematchBankSupportButton?.addEventListener("click", async () => {
  await runBankLocalMatch();
});

renderProjects();
renderTemplateManagement();
applyCurrentProjectContext();
renderOverview();
initWorkpaperBuilder();
loadKnowledgeDocuments();

function showPage(pageId, title) {
  document.body.dataset.view = "app";
  navItems.forEach((navItem) => navItem.classList.remove("active"));
  pageSections.forEach((section) => section.classList.remove("active"));

  document.querySelector(`#${pageId}`)?.classList.add("active");
  document.body.dataset.currentPage = pageId;
  pageTitle.textContent = pageId === "overview" ? "工作台总览" : title;

  if (pageId === "sampling-center") {
    renderSamplingCenter();
  }

  if (pageId === "overview") {
    renderOverview();
  }

  if (pageId === "workpaper") {
    syncAuditPeriodInputs();
  }

  if (pageId === "templates") {
    renderTemplateManagement();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function initWorkpaperBuilder() {
  await loadCashRuleConfig();
  renderWorkpaperBuilder();
}

function loadProjects() {
  try {
    const savedProjects = JSON.parse(localStorage.getItem(projectStorageKey) || "[]");
    return Array.isArray(savedProjects) ? savedProjects : [];
  } catch (error) {
    return [];
  }
}

function openNewProjectForm() {
  showPage("projects", "项目管理");
  document.querySelector('[data-page="projects"]')?.classList.add("active");
  resetProjectForm();
  projectNameInput?.focus();
}

function persistProjects() {
  localStorage.setItem(projectStorageKey, JSON.stringify(projectState.projects));
}

function createProjectId() {
  return `project-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readProjectForm() {
  return {
    id: projectIdInput?.value || createProjectId(),
    name: projectNameInput?.value.trim() || "",
    clientName: projectClientNameInput?.value.trim() || "",
    auditYear: projectAuditYearInput?.value.trim() || "",
    cutoffDate: projectCutoffDateInput?.value || "",
    industry: projectIndustryInput?.value.trim() || "",
    auditType: projectAuditTypeInput?.value || "年报审计",
    engagementType: projectEngagementTypeInput?.value || "连续审计业务",
    status: projectStatusInput?.value || "准备中",
    overallMateriality: projectOverallMaterialityInput?.value.trim() || "",
    performanceMateriality: projectPerformanceMaterialityInput?.value.trim() || "",
    tolerableMisstatement: projectTolerableMisstatementInput?.value.trim() || "",
    clearlyTrivialThreshold: projectClearlyTrivialThresholdInput?.value.trim() || "",
    materialityBasis: projectMaterialityBasisInput?.value.trim() || "",
    notes: projectNotesInput?.value.trim() || "",
    updatedAt: new Date().toISOString(),
  };
}

function saveProjectFromForm() {
  const project = readProjectForm();

  if (!project.name || !project.clientName || !project.auditYear || !project.cutoffDate) {
    setProjectSaveStatus("请先填写项目名称、被审计单位、审计年度和截止日。");
    return;
  }

  const existingIndex = projectState.projects.findIndex((item) => item.id === project.id);

  if (existingIndex >= 0) {
    projectState.projects[existingIndex] = {
      ...projectState.projects[existingIndex],
      ...project,
    };
  } else {
    projectState.projects.unshift({
      ...project,
      createdAt: new Date().toISOString(),
    });
    projectState.page = 0;
  }

  projectState.currentProjectId = project.id;
  localStorage.setItem(currentProjectStorageKey, project.id);
  persistProjects();
  applyCurrentProjectContext();
  clampProjectPage();
  renderProjects();
  renderOverview();
  fillProjectForm(project);
  setProjectFormMode("edit");
  setProjectSaveStatus(existingIndex >= 0 ? "已更新，并设为当前项目。" : "已新增，并设为当前项目。");
}

function fillProjectForm(project) {
  if (!project) {
    return;
  }

  projectIdInput.value = project.id || "";
  projectNameInput.value = project.name || "";
  projectClientNameInput.value = project.clientName || "";
  projectAuditYearInput.value = project.auditYear || "";
  projectCutoffDateInput.value = project.cutoffDate || "";
  projectIndustryInput.value = project.industry || "";
  projectAuditTypeInput.value = project.auditType || "年报审计";
  projectEngagementTypeInput.value = project.engagementType || "连续审计业务";
  projectStatusInput.value = project.status || "准备中";
  projectOverallMaterialityInput.value = project.overallMateriality || "";
  projectPerformanceMaterialityInput.value = project.performanceMateriality || "";
  projectTolerableMisstatementInput.value = project.tolerableMisstatement || "";
  projectClearlyTrivialThresholdInput.value = project.clearlyTrivialThreshold || "";
  projectMaterialityBasisInput.value = project.materialityBasis || "";
  projectNotesInput.value = project.notes || "";
}

function resetProjectForm() {
  projectForm?.reset();
  if (projectIdInput) {
    projectIdInput.value = "";
  }
  if (projectAuditTypeInput) {
    projectAuditTypeInput.value = "年报审计";
  }
  if (projectEngagementTypeInput) {
    projectEngagementTypeInput.value = "连续审计业务";
  }
  if (projectStatusInput) {
    projectStatusInput.value = "准备中";
  }
  setProjectFormMode("new");
  setProjectSaveStatus("正在新建项目。");
}

function editProject(projectId) {
  const project = projectState.projects.find((item) => item.id === projectId);

  if (!project) {
    return;
  }

  fillProjectForm(project);
  setProjectFormMode("edit");
  setProjectSaveStatus("正在编辑已有项目。");
  projectNameInput?.focus();
}

function activateProject(projectId) {
  const project = projectState.projects.find((item) => item.id === projectId);

  if (!project) {
    return;
  }

  projectState.currentProjectId = project.id;
  localStorage.setItem(currentProjectStorageKey, project.id);
  applyCurrentProjectContext();
  renderProjects();
  renderOverview();
  fillProjectForm(project);
  setProjectFormMode("edit");
  setProjectSaveStatus("已设为当前项目，年度和截止日已同步。");
}

function deleteProject(projectId) {
  const project = projectState.projects.find((item) => item.id === projectId);

  if (!project) {
    return;
  }

  const confirmed = window.confirm(`确认删除项目“${project.name}”吗？此操作只删除本机保存的项目主档。`);

  if (!confirmed) {
    return;
  }

  projectState.projects = projectState.projects.filter((item) => item.id !== projectId);

  if (projectState.currentProjectId === projectId) {
    projectState.currentProjectId = projectState.projects[0]?.id || "";
    if (projectState.currentProjectId) {
      localStorage.setItem(currentProjectStorageKey, projectState.currentProjectId);
    } else {
      localStorage.removeItem(currentProjectStorageKey);
    }
  }

  persistProjects();
  applyCurrentProjectContext();
  clampProjectPage();
  renderProjects();
  renderOverview();
  resetProjectForm();
  setProjectSaveStatus("项目已删除。");
}

function getCurrentProject() {
  return projectState.projects.find((project) => project.id === projectState.currentProjectId) || null;
}

function renderOverview() {
  if (!overviewProjectName || !overviewProjectStatus) {
    return;
  }

  const project = getCurrentProject();
  const uploadedFileCount =
    workpaperState.uploadedFiles.length +
    (workpaperState.sharedFiles.trialBalance ? 1 : 0) +
    workpaperState.cashSupportFiles.length +
    workpaperState.cashLargeSourceFiles.length +
    workpaperState.cashCutoffSourceFiles.length +
    workpaperState.bankLocalFiles.statement.length +
    workpaperState.bankLocalFiles.reconciliation.length +
    workpaperState.bankLocalFiles.largeTransactions.length +
    workpaperState.bankLocalFiles.cutoffTransactions.length +
    workpaperState.otherMonetarySupportFiles.length;
  const confirmedSampleCount = Object.values(workpaperState.samplingTasks).reduce(
    (total, taskState) => total + (taskState.confirmed?.length || 0),
    0,
  );
  const registeredMaterialCount = workpaperState.providedMaterials.size;
  const missingMaterials = getMissingMaterials();
  const missingMaterialCount = missingMaterials.length;
  const nextMissingMaterial = missingMaterials[0]?.material || "";

  if (!project) {
    overviewProjectName.textContent = "尚未选择项目";
    overviewProjectStatus.textContent = "点击右上角新建审计项目，开始组织底稿、抽凭、知识库和模板。";
    if (overviewUploadedCount) {
      overviewUploadedCount.textContent = String(uploadedFileCount);
    }
    if (overviewReviewCount) {
      overviewReviewCount.textContent = "0";
    }
    if (overviewStage) {
      overviewStage.textContent = "待建立";
    }
    if (overviewMaterialNote) {
      overviewMaterialNote.textContent = registeredMaterialCount
        ? `已登记 ${registeredMaterialCount} 类资料`
        : "尚未登记资料";
    }
    if (overviewReviewNote) {
      overviewReviewNote.textContent = "新建项目后再进入复核";
    }
    if (overviewNextStep) {
      overviewNextStep.textContent = "先建立项目主档";
    }
    if (overviewProgressText) {
      overviewProgressText.textContent = "0%";
    }
    if (overviewProgressBar) {
      overviewProgressBar.style.width = "0%";
    }
    return;
  }

  const statusProgressMap = {
    准备中: 18,
    资料收集中: 36,
    复核中: 72,
    已完成: 100,
  };
  const progress = statusProgressMap[project.status] ?? 24;

  overviewProjectName.textContent = project.name || "未命名项目";
  overviewProjectStatus.textContent = `${project.status || "准备中"} · ${project.clientName || "未填写被审计单位"} · ${project.auditYear || "-"} 年度`;
  if (overviewUploadedCount) {
    overviewUploadedCount.textContent = String(uploadedFileCount);
  }
  if (overviewReviewCount) {
    overviewReviewCount.textContent = String(confirmedSampleCount);
  }
  if (overviewStage) {
    overviewStage.textContent = project.status || "准备中";
  }
  if (overviewMaterialNote) {
    overviewMaterialNote.textContent = missingMaterialCount
      ? `缺 ${missingMaterialCount} 类，先补 ${nextMissingMaterial}`
      : `已登记 ${registeredMaterialCount} 类资料，仍需复核质量`;
  }
  if (overviewReviewNote) {
    overviewReviewNote.textContent = confirmedSampleCount
      ? "抽凭样本已确认，等待人工复核"
      : "暂无确认样本，可先生成抽样备选";
  }
  if (overviewNextStep) {
    overviewNextStep.textContent = missingMaterialCount
      ? "先补齐资料缺口"
      : "进入底稿填制与复核";
  }
  if (overviewProgressText) {
    overviewProgressText.textContent = `${progress}%`;
  }
  if (overviewProgressBar) {
    overviewProgressBar.style.width = `${progress}%`;
  }
}

function applyCurrentProjectContext() {
  const project = getCurrentProject();

  if (!project) {
    return;
  }

  if (!workpaperState.auditPeriodManuallyEdited) {
    workpaperState.auditYear = project.auditYear || workpaperState.auditYear;
    workpaperState.auditCutoffDate = project.cutoffDate || workpaperState.auditCutoffDate;
  }

  if (auditYearInput && !auditYearInput.value) {
    auditYearInput.value = project.auditYear || "";
  }

  if (auditCutoffDateInput && !auditCutoffDateInput.value) {
    auditCutoffDateInput.value = project.cutoffDate || "";
  }

  const suggestedThreshold = project.clearlyTrivialThreshold || project.tolerableMisstatement || "";

  if (samplingAmountThresholdInput && !samplingAmountThresholdInput.value && suggestedThreshold) {
    samplingAmountThresholdInput.value = suggestedThreshold;
  }
}

function renderProjects() {
  if (!projectList || !projectCount) {
    return;
  }

  projectCount.textContent = `${projectState.projects.length} 个项目`;

  if (!projectState.projects.length) {
    projectList.innerHTML = `<div class="empty-gap">还没有项目。请先填写左侧项目主档并保存。</div>`;
    renderProjectPagination();
    return;
  }

  clampProjectPage();
  const startIndex = projectState.page * projectState.pageSize;
  const visibleProjects = projectState.projects.slice(startIndex, startIndex + projectState.pageSize);

  projectList.innerHTML = visibleProjects
    .map((project) => renderProjectCard(project, project.id === projectState.currentProjectId))
    .join("");
  renderProjectPagination();
}

function getProjectTotalPages() {
  return Math.max(1, Math.ceil(projectState.projects.length / projectState.pageSize));
}

function clampProjectPage() {
  const totalPages = getProjectTotalPages();

  if (projectState.page > totalPages - 1) {
    projectState.page = totalPages - 1;
  }

  if (projectState.page < 0) {
    projectState.page = 0;
  }
}

function renderProjectPagination() {
  if (!projectPagination || !projectPageInfo || !projectPrevPageButton || !projectNextPageButton) {
    return;
  }

  const totalPages = getProjectTotalPages();
  const shouldShowPagination = projectState.projects.length > projectState.pageSize;

  projectPagination.hidden = !shouldShowPagination;
  projectPageInfo.textContent = `第 ${projectState.page + 1} / ${totalPages} 页`;
  projectPrevPageButton.disabled = projectState.page <= 0;
  projectNextPageButton.disabled = projectState.page >= totalPages - 1;
}

function renderProjectCard(project, isCurrent) {
  return `
    <article class="project-card ${isCurrent ? "active" : ""}">
      <div class="project-card-main">
        <div>
          <span class="project-status-pill">${escapeHtml(project.status || "准备中")}</span>
          ${isCurrent ? `<span class="project-current-pill">当前项目</span>` : ""}
          <h4>${escapeHtml(project.name || "未命名项目")}</h4>
          <p>${escapeHtml(project.clientName || "未填写被审计单位")} · ${escapeHtml(project.auditYear || "-")} 年度</p>
        </div>
        <div class="project-card-actions">
          <button class="secondary-action" data-project-action="edit" data-project-id="${escapeHtml(project.id)}" type="button">编辑</button>
          <button class="secondary-action" data-project-action="activate" data-project-id="${escapeHtml(project.id)}" type="button">设为当前</button>
          <button class="secondary-action project-danger-action" data-project-action="delete" data-project-id="${escapeHtml(project.id)}" type="button">删除</button>
        </div>
      </div>
      <div class="project-meta-grid">
        <span>截止日：${escapeHtml(project.cutoffDate || "-")}</span>
        <span>行业：${escapeHtml(project.industry || "未填写")}</span>
        <span>类型：${escapeHtml(project.auditType || "-")}</span>
        <span>承接：${escapeHtml(project.engagementType || "-")}</span>
      </div>
    </article>
  `;
}

function formatProjectAmount(value) {
  const numberValue = Number(value);

  if (!Number.isFinite(numberValue) || value === "") {
    return "未填写";
  }

  return numberValue.toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function setProjectSaveStatus(message) {
  if (projectSaveStatus) {
    projectSaveStatus.textContent = message;
  }
}

function setProjectFormMode(mode) {
  if (!projectFormMode) {
    return;
  }

  const isEdit = mode === "edit";
  projectFormMode.textContent = isEdit ? "编辑项目" : "新建项目";
  projectFormMode.classList.toggle("editing", isEdit);
}

function loadTemplateDefaults() {
  const fallbackDefaults = [
    "company-workpaper-suite",
    "bank-confirmation-standard",
    "counterparty-confirmation-standard",
  ];

  try {
    const savedDefaults = JSON.parse(localStorage.getItem(templateDefaultsStorageKey) || "{}");
    if (Array.isArray(savedDefaults)) {
      return new Set(savedDefaults);
    }

    if (savedDefaults && typeof savedDefaults === "object") {
      return new Set([...fallbackDefaults, ...Object.values(savedDefaults).filter(Boolean)]);
    }

    return new Set(fallbackDefaults);
  } catch (error) {
    return new Set(fallbackDefaults);
  }
}

function loadHiddenTemplates() {
  try {
    const savedHiddenIds = JSON.parse(localStorage.getItem(hiddenTemplatesStorageKey) || "[]");
    return new Set(Array.isArray(savedHiddenIds) ? savedHiddenIds : []);
  } catch (error) {
    return new Set();
  }
}

function persistTemplateDefaults() {
  localStorage.setItem(templateDefaultsStorageKey, JSON.stringify([...templateState.defaults]));
}

function persistHiddenTemplates() {
  localStorage.setItem(hiddenTemplatesStorageKey, JSON.stringify([...templateState.hiddenTemplateIds]));
}

function getVisibleTemplates() {
  return managedTemplates.filter((template) => !templateState.hiddenTemplateIds.has(template.id));
}

function getFilteredTemplates() {
  const visibleTemplates = getVisibleTemplates();

  if (templateState.activeFilter === "all") {
    return visibleTemplates;
  }

  return visibleTemplates.filter((template) => template.category === templateState.activeFilter);
}

function renderTemplateManagement() {
  if (!templateTable) {
    return;
  }

  const visibleTemplates = getVisibleTemplates();
  const filteredTemplates = getFilteredTemplates();
  const selectedTemplate =
    visibleTemplates.find((template) => template.id === templateState.selectedTemplateId) ||
    filteredTemplates[0] ||
    visibleTemplates[0];

  if (selectedTemplate) {
    templateState.selectedTemplateId = selectedTemplate.id;
  }

  if (templateWorkpaperCount) {
    templateWorkpaperCount.textContent = String(visibleTemplates.filter((template) => template.category === "workpaper-suite").length);
  }

  if (templateConfirmationCount) {
    templateConfirmationCount.textContent = String(
      visibleTemplates.filter((template) => template.category.includes("confirmation")).length,
    );
  }

  if (templateDefaultCount) {
    const defaultCount = visibleTemplates.filter((template) => templateState.defaults.has(template.id)).length;
    templateDefaultCount.textContent = String(defaultCount);
  }

  templateTable.innerHTML = filteredTemplates.length
    ? filteredTemplates.map((template) => renderTemplateRow(template, template.id === templateState.selectedTemplateId)).join("")
    : `<div class="empty-gap">当前分类没有可用模板。第一版删除只隐藏页面记录，不删除本地原始文件。</div>`;

  renderTemplateDetail(selectedTemplate);
}

function renderTemplateRow(template, isSelected) {
  const isDefault = templateState.defaults.has(template.id);

  return `
    <article class="template-row ${isSelected ? "active" : ""}" data-template-id="${escapeHtml(template.id)}">
      <div class="template-row-main">
        <div>
          <span class="template-type-pill">${escapeHtml(templateCategoryLabels[template.category] || "模板")}</span>
          ${isDefault ? `<span class="template-default-pill">默认</span>` : ""}
          <h4>${escapeHtml(template.name)}</h4>
          <p>${escapeHtml(template.scope)}</p>
        </div>
        <div class="template-row-actions">
          <button class="secondary-action" data-template-action="default" data-template-id="${escapeHtml(template.id)}" type="button">${isDefault ? "取消默认" : "设为默认"}</button>
          <button class="secondary-action project-danger-action" data-template-action="delete" data-template-id="${escapeHtml(template.id)}" type="button">删除</button>
        </div>
      </div>
      <div class="template-row-meta">
        <span>格式：${escapeHtml(template.format)}</span>
        <span>来源：${escapeHtml(template.source)}</span>
      </div>
    </article>
  `;
}

function renderTemplateDetail(template) {
  if (!templateDetail) {
    return;
  }

  if (!template) {
    templateDetail.innerHTML = `<p class="helper-text">当前没有可用模板。</p>`;
    return;
  }

  const isDefault = templateState.defaults.has(template.id);

  templateDetail.innerHTML = `
    <div class="template-detail-card">
      <span class="template-type-pill">${escapeHtml(templateCategoryLabels[template.category] || "模板")}</span>
      ${isDefault ? `<span class="template-default-pill">默认模板</span>` : ""}
      <h4>${escapeHtml(template.name)}</h4>
      <dl class="template-detail-list">
        <div>
          <dt>使用场景</dt>
          <dd>${escapeHtml(template.scenario)}</dd>
        </div>
        <div>
          <dt>后续联动</dt>
          <dd>${escapeHtml(template.linkage)}</dd>
        </div>
      </dl>
      <p class="helper-text">提醒：模板只作为生成副本的来源，自动填制内容需要人工复核。</p>
    </div>
  `;
}

function setDefaultTemplate(templateId) {
  const template = managedTemplates.find((item) => item.id === templateId);

  if (!template) {
    return;
  }

  if (templateState.defaults.has(template.id)) {
    templateState.defaults.delete(template.id);
  } else {
    templateState.defaults.add(template.id);
  }

  templateState.selectedTemplateId = template.id;
  persistTemplateDefaults();
  renderTemplateManagement();
}

function hideTemplate(templateId) {
  const template = managedTemplates.find((item) => item.id === templateId);

  if (!template) {
    return;
  }

  const confirmed = window.confirm(`确认从模板管理页删除“${template.name}”吗？这只隐藏页面记录，不删除本地模板原件。`);

  if (!confirmed) {
    return;
  }

  templateState.hiddenTemplateIds.add(template.id);

  if (templateState.selectedTemplateId === template.id) {
    templateState.selectedTemplateId = getVisibleTemplates()[0]?.id || "";
  }

  templateState.defaults.delete(template.id);

  persistTemplateDefaults();
  persistHiddenTemplates();
  renderTemplateManagement();
}

async function loadCashRuleConfig() {
  try {
    const response = await fetch("data/cash-workpaper-rules.json");
    if (!response.ok) {
      throw new Error("规则文件读取失败");
    }
    const data = await response.json();
    cashRuleConfig = data.rules || [];
  } catch (error) {
    cashRuleConfig = [];
    if (exportStatus) {
      exportStatus.textContent = "规则文件未通过本地服务读取，当前使用页面内置规则预览。";
    }
  }
}

async function loadKnowledgeDocuments() {
  if (!knowledgeDocumentList) {
    return;
  }

  if (isOnlineDemo) {
    renderOnlineKnowledgeDemo();
    return;
  }

  knowledgeDocumentList.innerHTML = `<div class="empty-gap">正在读取本地知识库...</div>`;

  try {
    const response = await fetch("/api/knowledge-documents");
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "知识库读取失败");
    }

    renderKnowledgeDocuments(result.documents || []);
  } catch (error) {
    knowledgeDocumentList.innerHTML = `<div class="empty-gap">未能读取知识库。请确认已用 node server.js 启动本地服务。</div>`;
  }
}

function renderKnowledgeDocuments(documents) {
  if (!knowledgeDocumentList) {
    return;
  }

  knowledgeDocumentList.innerHTML = documents.length
    ? documents
        .map(
          (document) => `
            <div class="knowledge-document-item">
              <strong>${escapeHtml(document.title)}</strong>
              <span>${escapeHtml(document.relativePath)}</span>
              <small>${escapeHtml(formatKnowledgeCategory(document.category))} · ${document.sectionCount || 0} 个片段</small>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-gap">knowledge-base/ 下还没有可检索的 Markdown 文件。</div>`;
}

async function askKnowledgeBase() {
  if (!knowledgeQuestionInput || !knowledgeAnswer || !knowledgeStatus || !askKnowledgeButton) {
    return;
  }

  if (isOnlineDemo) {
    knowledgeStatus.textContent = "在线展示版不连接本地知识库接口。";
    knowledgeAnswer.innerHTML = `
      <p class="note-title">演示模式</p>
      <p>${getOnlineDemoMessage()}</p>
      <p>你可以在演示视频里看到：系统如何根据本地知识库检索依据，并在资料不足时提示缺口。</p>
    `;
    return;
  }

  const question = knowledgeQuestionInput.value.trim();

  if (!question) {
    knowledgeStatus.textContent = "请先输入一个问题。";
    knowledgeAnswer.innerHTML = `
      <p class="note-title">资料不足</p>
      <p>还没有问题，系统不能凭空生成回答。</p>
    `;
    return;
  }

  askKnowledgeButton.disabled = true;
  knowledgeStatus.textContent = "正在检索本地知识库...";

  try {
    const response = await fetch("/api/ask-knowledge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "问答失败");
    }

    renderKnowledgeAnswer(result);
    knowledgeStatus.textContent = result.citations?.length
      ? `已找到 ${result.citations.length} 条引用依据，回答仍需人工复核。`
      : "未找到充分依据，已提示资料缺口。";
  } catch (error) {
    knowledgeStatus.textContent = "问答失败，请确认本地服务正在运行。";
    knowledgeAnswer.innerHTML = `
      <p class="note-title">无法生成回答</p>
      <p>${escapeHtml(error.message || "本地知识库接口暂不可用。")}</p>
    `;
  } finally {
    askKnowledgeButton.disabled = false;
  }
}

async function askKnowledgeBaseWithAi() {
  if (!knowledgeQuestionInput || !knowledgeAnswer || !knowledgeStatus || !askKnowledgeButton || !askKnowledgeAiButton) {
    return;
  }

  if (isOnlineDemo) {
    knowledgeStatus.textContent = "在线展示版不调用 AI Key。";
    knowledgeAnswer.innerHTML = `
      <p class="note-title">AI 整理已隐藏</p>
      <p>${getOnlineDemoMessage()}</p>
      <p>这样做可以避免把 API Key 或真实审计资料暴露在公开网页中。</p>
    `;
    return;
  }

  const question = knowledgeQuestionInput.value.trim();

  if (!question) {
    knowledgeStatus.textContent = "请先输入一个问题。";
    knowledgeAnswer.innerHTML = `
      <p class="note-title">资料不足</p>
      <p>还没有问题，系统不能凭空生成回答。</p>
    `;
    return;
  }

  askKnowledgeButton.disabled = true;
  askKnowledgeAiButton.disabled = true;
  knowledgeStatus.textContent = "正在检索本地知识库，并交给 AI 整理...";

  try {
    const response = await fetch("/api/ask-knowledge-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "AI 整理失败");
    }

    renderKnowledgeAnswer(result);
    knowledgeStatus.textContent = result.aiAnswer
      ? `AI 已基于 ${result.citations?.length || 0} 条本地引用整理回答，仍需人工复核。`
      : result.aiMeta?.message || "未找到充分依据，已跳过 AI 整理。";
  } catch (error) {
    knowledgeStatus.textContent = "AI 整理失败，请检查本地服务、API Key 或账户余额。";
    knowledgeAnswer.innerHTML = `
      <p class="note-title">无法生成 AI 回答</p>
      <p>${escapeHtml(error.message || "AI 接口暂不可用。")}</p>
    `;
  } finally {
    askKnowledgeButton.disabled = false;
    askKnowledgeAiButton.disabled = false;
  }
}

function renderKnowledgeAnswer(result) {
  const citations = Array.isArray(result.citations) ? result.citations : [];
  const reviewNotes = Array.isArray(result.reviewNotes) ? result.reviewNotes : [];
  const aiAnswer = String(result.aiAnswer || "").trim();

  knowledgeAnswer.innerHTML = `
    ${
      aiAnswer
        ? `
          <div class="knowledge-ai-answer">
            <div class="knowledge-ai-header">
              <span>AI 整理回答</span>
              <small>${escapeHtml(result.aiMeta?.model || "DeepSeek")}</small>
            </div>
            <div>${escapeHtml(aiAnswer).replace(/\n/g, "<br />")}</div>
          </div>
        `
        : ""
    }
    <p class="note-title">${citations.length ? (aiAnswer ? "本地检索依据" : "本地知识库回答") : "资料不足提示"}</p>
    <div class="knowledge-answer-text">${escapeHtml(result.answer || "当前没有可展示的回答。").replace(/\n/g, "<br />")}</div>
    <div class="knowledge-citation-block">
      <strong>引用来源</strong>
      ${
        citations.length
          ? citations
              .map(
                (citation, index) => `
                  <div class="knowledge-citation-item">
                    <span>${citation.isFallback ? '<b class="knowledge-citation-label">相似参考</b>' : ""}${citation.isSupplemental ? '<b class="knowledge-citation-label knowledge-citation-label-muted">辅助依据</b>' : ""}${escapeHtml(citation.title)} · ${escapeHtml(citation.heading)}</span>
                    <small>${escapeHtml(citation.path)}</small>
                    <p>${escapeHtml(citation.excerpt)}</p>
                    ${
                      citation.sectionText && citation.sectionText !== citation.excerpt
                        ? `
                          <details class="knowledge-citation-details">
                            <summary>展开查看命中章节</summary>
                            <pre>${escapeHtml(citation.sectionText)}</pre>
                          </details>
                        `
                        : ""
                    }
                    ${
                      citation.fullText && citation.fullText !== citation.sectionText
                        ? `
                          <details class="knowledge-citation-details">
                            <summary>展开查看全文</summary>
                            <pre>${escapeHtml(citation.fullText)}</pre>
                          </details>
                        `
                        : ""
                    }
                  </div>
                `,
              )
              .join("")
          : `<p>当前没有命中可引用资料，请补充知识库文档或调整问题。</p>`
      }
    </div>
    <div class="knowledge-review-block">
      <strong>人工复核提醒</strong>
      ${
        reviewNotes.length
          ? `<ul>${reviewNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>`
          : `<p>所有系统输出都需要审计人员复核。</p>`
      }
    </div>
  `;
}

function formatKnowledgeCategory(category) {
  const labels = {
    official: "官方依据",
    explanations: "学习解释",
    workpapers: "底稿规则",
    root: "知识库说明",
  };

  return labels[category] || category || "未分类";
}

function syncAuditPeriodInputs() {
  if (auditYearInput && document.activeElement !== auditYearInput && auditYearInput.value !== workpaperState.auditYear) {
    auditYearInput.value = workpaperState.auditYear;
  }

  if (
    auditCutoffDateInput &&
    document.activeElement !== auditCutoffDateInput &&
    auditCutoffDateInput.value !== workpaperState.auditCutoffDate
  ) {
    auditCutoffDateInput.value = workpaperState.auditCutoffDate;
  }

  if (!auditPeriodHint) {
    return;
  }

  if (workpaperState.auditYear && workpaperState.auditCutoffDate) {
    auditPeriodHint.textContent = workpaperState.auditPeriodManuallyEdited
      ? `当前按手动设置：${workpaperState.auditYear} 年审计，截止日 ${workpaperState.auditCutoffDate}。`
      : `系统已根据上传资料识别：${workpaperState.auditYear} 年审计，截止日 ${workpaperState.auditCutoffDate}。`;
    return;
  }

  auditPeriodHint.textContent = "可先由序时账、现金日记账等资料自动识别；如识别不准，可手动修改。";
}

function normalizeAuditYear(value) {
  const year = Number(String(value || "").trim());
  return Number.isInteger(year) && year >= 2000 && year <= 2099 ? year : null;
}

function getYearFromDateInput(value) {
  const match = String(value || "").match(/^(\d{4})-\d{2}-\d{2}$/);
  return match ? normalizeAuditYear(match[1]) : null;
}

function getEffectiveCutoffDate(localCutoffDate = "") {
  return workpaperState.auditCutoffDate || localCutoffDate || "";
}

function applyInferredAuditPeriodFromRows(rows, sourceLabel = "上传资料") {
  const hasValidManualPeriod =
    workpaperState.auditPeriodManuallyEdited &&
    (normalizeAuditYear(workpaperState.auditYear) || workpaperState.auditCutoffDate);

  if (hasValidManualPeriod) {
    return;
  }

  const inferredCutoffDate = inferAuditPeriodDateFromSourceRows(rows);
  const inferredYear = getYearFromDateInput(inferredCutoffDate);

  if (!inferredCutoffDate || !inferredYear) {
    return;
  }

  workpaperState.auditYear = String(inferredYear);
  workpaperState.auditCutoffDate = inferredCutoffDate;
  syncAuditPeriodInputs();

  if (auditPeriodHint) {
    auditPeriodHint.textContent = `系统已根据${sourceLabel}识别：${inferredYear} 年审计，截止日 ${inferredCutoffDate}。`;
  }
}

function inferAuditPeriodDateFromSourceRows(rows) {
  const yearStats = new Map();

  rows.forEach((row) => {
    const year = Number(row.year);
    const month = Number(row.month);

    if (!Number.isFinite(year) || year < 1900) {
      return;
    }

    if (!yearStats.has(year)) {
      yearStats.set(year, { count: 0, months: new Set() });
    }

    const stat = yearStats.get(year);
    stat.count += 1;

    if (Number.isFinite(month) && month >= 1 && month <= 12) {
      stat.months.add(month);
    }
  });

  const years = Array.from(yearStats.keys()).sort((a, b) => a - b);

  if (!years.length) {
    return "";
  }

  if (years.length === 1) {
    return `${years[0]}-12-31`;
  }

  const cutoffCandidate = years.find((year) => {
    const currentMonths = yearStats.get(year)?.months;
    const nextMonths = yearStats.get(year + 1)?.months;

    return currentMonths?.has(12) && nextMonths?.has(1);
  });

  if (cutoffCandidate) {
    return `${cutoffCandidate}-12-31`;
  }

  const dominantYear = years.reduce((bestYear, year) => {
    const bestCount = yearStats.get(bestYear)?.count || 0;
    const currentCount = yearStats.get(year)?.count || 0;

    if (currentCount > bestCount) {
      return year;
    }

    if (currentCount === bestCount && year > bestYear) {
      return year;
    }

    return bestYear;
  }, years[0]);

  return `${dominantYear}-12-31`;
}

async function inferAuditPeriodFromLedgerFile(file, materialType) {
  try {
    const result = await postFileForParsing("/api/parse-ledger-transactions", file);
    applyInferredAuditPeriodFromRows(result.transactions || [], materialType);
  } catch (error) {
    if (auditPeriodHint && !workpaperState.auditCutoffDate) {
      auditPeriodHint.textContent = "暂未能从该资料识别审计年度，可手动填写审计年度或截止日。";
    }
  }
}

function renderSubject(subjectName) {
  const data = subjectData[subjectName] || subjectData["货币资金"];

  subjectTitle.textContent = data.title;
  subjectDescription.textContent = data.description;
  subjectTemplate.textContent = data.template;
  auditFlowList.innerHTML = data.flow.map((item) => `<li>${item}</li>`).join("");
  preRiskList.innerHTML = data.risks.map((item) => `<li>${item}</li>`).join("");
  materialList.innerHTML = data.materials.map((item) => `<li>${item}</li>`).join("");
}

function renderWorkpaperBuilder() {
  if (!templateOptions || !workpaperList || !providedMaterialList) {
    return;
  }

  syncAuditPeriodInputs();

  const activeTemplate = getActiveTemplate();
  const totalPages = Math.ceil(activeTemplate.workpapers.length / workpapersPerPage);
  const pageStart = workpaperState.page * workpapersPerPage;
  const pageWorkpapers = activeTemplate.workpapers.slice(
    pageStart,
    pageStart + workpapersPerPage,
  );

  templateOptions.innerHTML = cashWorkpaperTemplates
    .map(
      (template) => `
        <label class="template-option ${template.id === activeTemplate.id ? "active" : ""}">
          <input
            type="radio"
            name="cash-template"
            value="${template.id}"
            ${template.id === activeTemplate.id ? "checked" : ""}
          />
          <span>
            <strong>${template.name}</strong>
            <small>${template.file}</small>
          </span>
        </label>
      `,
    )
    .join("");

  templateSummary.textContent = activeTemplate.description;
  workpaperPageInfo.textContent = `${workpaperState.page + 1} / ${totalPages}`;
  renderMaterialTypeOptions();

  workpaperList.innerHTML = pageWorkpapers
    .map(
      (workpaper, index) => `
        <button
          class="workpaper-item ${pageStart + index === workpaperState.selectedWorkpaperIndex ? "active" : ""}"
          data-workpaper-index="${pageStart + index}"
          type="button"
        >
          <span>${String(pageStart + index + 1).padStart(2, "0")}</span>
          <strong>${workpaper.name}</strong>
          <small>需要 ${workpaper.materials.length} 类资料</small>
        </button>
      `,
    )
    .join("");

  providedMaterialList.innerHTML = getMaterialOptions()
    .map(
      (material) => `
        <label class="material-check">
          <input
            type="checkbox"
            value="${material}"
            ${workpaperState.providedMaterials.has(material) ? "checked" : ""}
          />
          <span>${material}</span>
        </label>
      `,
    )
    .join("");

  templateOptions.querySelectorAll('input[name="cash-template"]').forEach((input) => {
    input.addEventListener("change", () => {
      workpaperState.templateId = input.value;
      workpaperState.selectedWorkpaperIndex = 0;
      workpaperState.page = 0;
      renderWorkpaperBuilder();
    });
  });

  workpaperList.querySelectorAll(".workpaper-item").forEach((button) => {
    button.addEventListener("click", () => {
      workpaperState.selectedWorkpaperIndex = Number(button.dataset.workpaperIndex);
      renderWorkpaperBuilder();
    });
  });

  providedMaterialList.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        workpaperState.providedMaterials.add(input.value);
      } else {
        workpaperState.providedMaterials.delete(input.value);
      }
      renderGapResult();
      renderFillableStatus();
    });
  });

  prevWorkpaperPageButton.disabled = workpaperState.page === 0;
  nextWorkpaperPageButton.disabled = workpaperState.page >= totalPages - 1;

  renderSelectedWorkpaper();
  renderGapResult();
  renderUploadedFiles();
  renderFillableStatus();
}

function renderSelectedWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const selectedWorkpaper =
    activeTemplate.workpapers[workpaperState.selectedWorkpaperIndex] ||
    activeTemplate.workpapers[0];
  const rule = getRuleForWorkpaper(selectedWorkpaper);
  const objective = rule?.objective || selectedWorkpaper.objective;
  const materials = getDisplayMaterials(rule?.materials || selectedWorkpaper.materials);
  const alerts = rule?.alerts || selectedWorkpaper.alerts;
  const autoFillFields = rule?.autoFillFields || ["暂未配置自动填字段，先保留人工填制。"];
  const manualJudgements = rule?.manualJudgements || ["该底稿暂未配置人工复核事项，需由审计人员结合底稿要求判断。"];

  selectedWorkpaperTitle.textContent = selectedWorkpaper.name;
  selectedWorkpaperObjective.textContent = objective;
  selectedWorkpaperMaterials.innerHTML = materials
    .map((material) => `<li>${material}</li>`)
    .join("");
  selectedWorkpaperAutoFields.innerHTML = autoFillFields
    .map((field) => `<li>${field}</li>`)
    .join("");
  selectedWorkpaperManual.innerHTML = manualJudgements
    .map((item) => `<li>${item}</li>`)
    .join("");
  selectedWorkpaperAlerts.innerHTML = alerts
    .map((alert) => `<li>${alert}</li>`)
    .join("");
}

function renderGapResult() {
  const missingMaterials = getMissingMaterials();

  gapCount.textContent = `${missingMaterials.length} 项`;
  missingMaterialList.innerHTML = missingMaterials.length
    ? missingMaterials
        .map(
          (item) => `
            <div class="gap-item">
              <strong>${item.material}</strong>
              <span>影响底稿：${item.workpapers.join("、")}</span>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-gap">当前模板的基础资料已勾选齐全，下一步仍需人工复核资料质量和金额勾稽。</div>`;
}

function renderMaterialTypeOptions() {
  if (!materialTypeSelect) {
    return;
  }

  const currentValue = materialTypeSelect.value;
  const options = getMaterialOptions();

  materialTypeSelect.innerHTML = `
    <option value="" ${currentValue ? "" : "selected"}>请选择资料类型</option>
    ${options
      .map(
        (material) => `
        <option value="${material}" ${material === currentValue ? "selected" : ""}>${material}</option>
      `,
      )
      .join("")}
  `;
}

async function confirmMaterialUpload() {
  const file = auditFileInput?.files?.[0];
  const materialType = materialTypeSelect?.value;

  if (!file || !materialType) {
    uploadHint.textContent = "请先选择文件，并选择对应的资料类型。";
    return;
  }

  confirmMaterialUploadButton.disabled = true;
  uploadHint.textContent = "正在登记资料...";

  registerUploadedMaterial(file, materialType);

  if (materialType === "科目余额表") {
    await parseTrialBalanceFile(file);
  }

  if (materialType === "银行对账单") {
    await parseBankSupportFile(file, "statement");
  }

  if (materialType === "银行存款余额调节表") {
    await parseBankSupportFile(file, "reconciliation");
  }

  if (["序时账", "现金日记账"].includes(materialType)) {
    await inferAuditPeriodFromLedgerFile(file, materialType);
  }

  auditFileInput.value = "";
  selectedFileName.textContent = "尚未选择文件";
  if (uploadHint.textContent === "正在登记资料...") {
    uploadHint.textContent = `已登记“${materialType}”，并自动勾选为已取得资料。`;
  }
  confirmMaterialUploadButton.disabled = false;

  renderWorkpaperBuilder();
}

function handleBankLocalFileSelection(inputNode, fileKey, materialType) {
  const files = Array.from(inputNode?.files || []);
  const file = files[0];

  if (!file) {
    return;
  }

  if (["statement", "reconciliation", "largeTransactions", "cutoffTransactions"].includes(fileKey)) {
    workpaperState.bankLocalFiles[fileKey] = [
      ...workpaperState.bankLocalFiles[fileKey],
      ...files,
    ];
    files.forEach((item) => registerUploadedMaterial(item, materialType));
  } else {
    workpaperState.bankLocalFiles[fileKey] = file;
    registerUploadedMaterial(file, materialType);
  }

  inputNode.value = "";
  renderBankLocalUploadState();
  const selectedCount = Array.isArray(workpaperState.bankLocalFiles[fileKey])
    ? workpaperState.bankLocalFiles[fileKey].length
    : 0;
  setStatusText(
    bankLocalUploadStatus,
    fileKey === "statement" ||
      fileKey === "reconciliation" ||
      fileKey === "largeTransactions" ||
      fileKey === "cutoffTransactions"
      ? `已选择 ${selectedCount} 份${getBankLocalFileTypeLabel(fileKey)}。如资料都已选好，请点击“开始匹配”。`
      : `已选择“${file.name}”。如资料都已选好，请点击“开始匹配”。`,
  );
}

async function runBankLocalMatch() {
  const { trialBalance, statement, reconciliation } = workpaperState.bankLocalFiles;
  const effectiveTrialBalance = trialBalance || workpaperState.sharedFiles.trialBalance;

  if (!effectiveTrialBalance && !statement.length && !reconciliation.length) {
    setStatusText(bankLocalUploadStatus, "请先选择至少一份本表资料，或先在底稿生成页上传科目余额表。");
    return;
  }

  rematchBankSupportButton.disabled = true;
  setStatusText(bankLocalUploadStatus, "正在解析并匹配本表资料...");

  try {
    if (effectiveTrialBalance) {
      await parseTrialBalanceFile(effectiveTrialBalance, bankLocalUploadStatus);
    }

    if (statement.length) {
      workpaperState.bankSupportItems.statement = [];
      workpaperState.recognitionStatus.statement = "none";
      clearBankStatementMatches();

      for (const statementFile of statement) {
        await parseBankSupportFile(statementFile, "statement", bankLocalUploadStatus, true);
      }
    }

    if (reconciliation.length) {
      workpaperState.bankSupportItems.reconciliation = [];
      workpaperState.recognitionStatus.reconciliation = "none";
      clearBankReconciliationMatches();

      for (const reconciliationFile of reconciliation) {
        await parseBankSupportFile(
          reconciliationFile,
          "reconciliation",
          bankLocalUploadStatus,
          true,
        );
      }
    }

    const matchSummary = applyStoredBankSupportMatches();
    setStatusText(
      bankLocalUploadStatus,
      matchSummary
        ? `匹配完成：${matchSummary}。请复核下方账户行状态。`
        : "资料已解析，但暂未匹配到下方账户行。请检查账号和期末未审数是否一致。",
    );
  } catch (error) {
    setStatusText(bankLocalUploadStatus, getFriendlyFetchError(error));
  } finally {
    rematchBankSupportButton.disabled = false;
  }

  renderBankAccountRows();
  renderWorkpaperEditor();
}

function clearBankLocalFile(fileKey) {
  if (fileKey === "trialBalance" && bankTrialBalanceInput) {
    workpaperState.bankLocalFiles.trialBalance = null;
    bankTrialBalanceInput.value = "";
  }

  if (fileKey === "statement") {
    workpaperState.bankLocalFiles.statement = [];
    if (bankStatementInput) {
      bankStatementInput.value = "";
    }
    workpaperState.bankSupportItems.statement = [];
    workpaperState.recognitionStatus.statement = "none";
    clearBankStatementMatches();
  }

  if (fileKey === "reconciliation") {
    workpaperState.bankLocalFiles.reconciliation = [];
    if (bankReconciliationInput) {
      bankReconciliationInput.value = "";
    }
    workpaperState.bankSupportItems.reconciliation = [];
    workpaperState.recognitionStatus.reconciliation = "none";
    clearBankReconciliationMatches();
  }

  if (fileKey === "largeTransactions") {
    workpaperState.bankLocalFiles.largeTransactions = [];
    workpaperState.bankLargeTransactions = [];
    if (bankLargeTransactionsInput) {
      bankLargeTransactionsInput.value = "";
    }
  }

  if (fileKey === "cutoffTransactions") {
    workpaperState.bankLocalFiles.cutoffTransactions = [];
    workpaperState.bankCutoffTransactions = [];
    if (bankCutoffTransactionsInput) {
      bankCutoffTransactionsInput.value = "";
    }
  }

  renderBankLocalUploadState();
  renderBankAccountRows();
  renderBankLargeTransactionRows();
  renderBankCutoffTransactionRows();
  setStatusText(bankLocalUploadStatus, "已移除所选资料。可以重新上传后点击“开始匹配”。");
}

function renderBankLocalUploadState() {
  updateBankLocalFileControl("trialBalance", bankTrialBalanceLabel, "上传科目余额表");
  updateBankLocalFileControl("statement", bankStatementLabel, "上传银行对账单");
  updateBankLocalFileControl("reconciliation", bankReconciliationLabel, "上传余额调节表");
  updateBankLocalFileControl("largeTransactions", bankLargeTransactionsLabel, "上传大额收付检查表");
  updateBankLocalFileControl("cutoffTransactions", bankCutoffTransactionsLabel, "上传截止测试资料");
}

function updateBankLocalFileControl(fileKey, labelNode, defaultLabel) {
  const file = workpaperState.bankLocalFiles[fileKey];
  const isFileList = Array.isArray(file);
  const hasFile = isFileList ? file.length > 0 : Boolean(file);
  const sharedTrialBalance = fileKey === "trialBalance" ? workpaperState.sharedFiles.trialBalance : null;

  if (labelNode) {
    labelNode.textContent = sharedTrialBalance && !file
      ? "已从资料池取得科目余额表"
      : isFileList
      ? file.length
        ? `已选 ${file.length} 份${getBankLocalFileTypeLabel(fileKey)}`
        : defaultLabel
      : file
        ? file.name
        : defaultLabel;
  }

  const clearButton = document.querySelector(`[data-clear-bank-file="${fileKey}"]`);

  if (clearButton) {
    clearButton.hidden = !hasFile;
  }
}

function getBankLocalFileTypeLabel(fileKey) {
  if (fileKey === "statement") {
    return "对账单";
  }

  if (fileKey === "reconciliation") {
    return "调节表";
  }

  if (fileKey === "largeTransactions") {
    return "大额收付检查表";
  }

  if (fileKey === "cutoffTransactions") {
    return "截止测试资料";
  }

  return "资料";
}

function registerUploadedMaterial(file, materialType) {
  workpaperState.uploadedFiles.push({
    id: `${Date.now()}-${file.name}`,
    name: file.name,
    size: file.size,
    materialType,
    file,
  });
  workpaperState.providedMaterials.add(materialType);

  if (materialType === "科目余额表") {
    workpaperState.sharedFiles.trialBalance = file;
  }
}

async function handleOtherMonetarySupportSelection(inputNode) {
  const files = Array.from(inputNode?.files || []);
  const supportType = inputNode?.dataset.otherSupportType || "";

  if (!files.length || !supportType) {
    setStatusText(otherMonetaryUploadStatus, "请先选择文件。");
    return;
  }

  const uploadedAt = Date.now();
  const newItems = files.map((file, index) => ({
    id: `${uploadedAt}-${index}-${file.name}`,
    name: file.name,
    size: file.size,
    supportType,
    file,
  }));

  workpaperState.otherMonetarySupportFiles = [
    ...workpaperState.otherMonetarySupportFiles,
    ...newItems,
  ];
  files.forEach((file) =>
    registerUploadedMaterial(file, supportType === "科目余额表" ? "科目余额表" : `其他货币资金-${supportType}`),
  );
  if (supportType !== "科目余额表") {
    workpaperState.providedMaterials.add(supportType);
  }

  if (inputNode) {
    inputNode.value = "";
  }

  if (supportType === "科目余额表") {
    await parseTrialBalanceFile(files[0], otherMonetaryUploadStatus);
  } else {
    setStatusText(
      otherMonetaryUploadStatus,
      `已登记 ${files.length} 个“${supportType}”文件。当前只登记资料，不自动判断相符或受限结论。`,
    );
  }

  renderOtherMonetaryUploadState();
  renderOtherMonetarySupportList();
  renderOtherMonetaryRows();
  renderUploadedFiles();
  renderWorkpaperBuilder();
}

function removeOtherMonetarySupportGroup(supportType) {
  workpaperState.otherMonetarySupportFiles = workpaperState.otherMonetarySupportFiles.filter(
    (file) => file.supportType !== supportType,
  );
  renderOtherMonetarySupportList();
  renderOtherMonetaryUploadState();
  setStatusText(otherMonetaryUploadStatus, `已移除“${supportType}”资料。`);
}

function renderOtherMonetarySupportList() {
  if (!otherMonetarySupportList) {
    return;
  }

  const groupedFiles = getOtherMonetarySupportGroups();

  otherMonetarySupportList.innerHTML = groupedFiles.length
    ? groupedFiles
        .map(
          (group) => `
            <div class="other-support-file-item">
              <div>
                <strong>已选 ${group.count} 份${escapeHtml(group.supportType)}</strong>
                <span>${group.totalSizeText}</span>
              </div>
              <button class="upload-clear other-support-delete" data-delete-other-support="${escapeHtml(group.supportType)}" type="button" aria-label="移除${escapeHtml(group.supportType)}" title="移除">×</button>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-gap">还没有上传本表资料。请点击上方对应资料按钮选择文件；后续再做自动解析匹配。</div>`;

  otherMonetarySupportList.querySelectorAll("[data-delete-other-support]").forEach((button) => {
    button.addEventListener("click", () => {
      removeOtherMonetarySupportGroup(button.dataset.deleteOtherSupport);
    });
  });
}

function getOtherMonetarySupportGroups() {
  const groups = new Map();

  workpaperState.otherMonetarySupportFiles.forEach((file) => {
    if (!groups.has(file.supportType)) {
      groups.set(file.supportType, {
        supportType: file.supportType,
        count: 0,
        totalSize: 0,
      });
    }

    const group = groups.get(file.supportType);
    group.count += 1;
    group.totalSize += file.size || 0;
  });

  return Array.from(groups.values()).map((group) => ({
    ...group,
    totalSizeText: formatFileSize(group.totalSize),
  }));
}

function handleCashSupportSelection(input) {
  const files = Array.from(input.files || []);
  const supportType = input.dataset.cashSupportType || "现金资料";
  const sourceType = input.dataset.cashSourceType || supportType;

  if (!files.length) {
    return;
  }

  const supportItems = files.map((file) => ({
      file,
      name: file.name,
      size: file.size,
      supportType,
      sourceType,
    }));

  workpaperState.cashSupportFiles = [...workpaperState.cashSupportFiles, ...supportItems];

  if (supportType === "大额收支检查表") {
    workpaperState.cashLargeSourceFiles = [...workpaperState.cashLargeSourceFiles, ...supportItems];
  }

  if (supportType === "截止测试资料") {
    workpaperState.cashCutoffSourceFiles = [...workpaperState.cashCutoffSourceFiles, ...supportItems];
  }

  input.value = "";
  renderCashSupportList();
  setStatusText(cashCountUploadStatus, `已添加 ${files.length} 份${supportType}。`);
}

function renderCashSupportList() {
  if (!cashSupportList) {
    return;
  }

  const files = workpaperState.cashSupportFiles || [];

  cashSupportList.innerHTML = files.length
    ? files
        .map(
          (item, index) => `
            <div class="other-support-file-item">
              <div>
                <strong>${escapeHtml(item.supportType)}：${escapeHtml(item.name)}</strong>
                <span>${formatFileSize(item.size || 0)}</span>
              </div>
              <button class="upload-clear other-support-delete" data-delete-cash-source="${index}" type="button" aria-label="移除${escapeHtml(item.name)}" title="移除">×</button>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-gap">还没有上传现金底稿资料。请先上传库存现金盘点表、大额收支检查表、截止测试资料或其他资料。</div>`;

  cashSupportList.querySelectorAll("[data-delete-cash-source]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.deleteCashSource);
      const [removed] = workpaperState.cashSupportFiles.splice(index, 1);

      if (removed) {
        workpaperState.cashLargeSourceFiles = workpaperState.cashLargeSourceFiles.filter(
          (item) => item !== removed,
        );
        workpaperState.cashCutoffSourceFiles = workpaperState.cashCutoffSourceFiles.filter(
          (item) => item !== removed,
        );
      }

      renderCashSupportList();
      setStatusText(cashCountUploadStatus, "已删除所选资料。");
    });
  });
}

function renderCashCountManualEditor() {
  if (!cashDenominationTable || !cashCountSummary) {
    return;
  }

  const data = workpaperState.cashCountData;

  document.querySelectorAll("[data-cash-count-field]").forEach((input) => {
    const field = input.dataset.cashCountField;
    if (input.value !== String(data[field] || "")) {
      input.value = data[field] || "";
    }
  });

  cashDenominationTable.innerHTML = `
    <div class="cash-denomination-row header">
      <span>面额</span>
      <span>张/枚数</span>
      <span>金额</span>
    </div>
    ${cashDenominations
      .map((amount) => {
        const key = String(amount);
        const count = data.denominations[key] || "";
        return `
          <div class="cash-denomination-row">
            <strong>${formatDenominationLabel(amount)}</strong>
            <input data-cash-denomination="${key}" type="text" inputmode="numeric" value="${escapeHtml(count)}" placeholder="0" />
            <span class="cash-denomination-amount" data-cash-denomination-amount="${key}">0.00</span>
          </div>
        `;
      })
      .join("")}
  `;

  updateCashCountCalculatedDisplay();
}

function updateCashCountCalculatedDisplay() {
  if (!cashCountSummary) {
    return;
  }

  const calculated = calculateCashCountData();

  Object.entries(calculated.denominationAmounts).forEach(([key, amount]) => {
    const amountNode = cashDenominationTable?.querySelector(`[data-cash-denomination-amount="${CSS.escape(key)}"]`);

    if (amountNode) {
      amountNode.textContent = formatMoney(amount);
    }
  });

  cashCountSummary.innerHTML = [
    ["盘点实有现金数额", calculated.actualCashAmount],
    ["盘点日账面应有余额", calculated.expectedCashOnCountDate],
    ["盘点日实际与应有金额差异", calculated.cashDifference],
    ["长、短款（含白条抵库）", calculated.longShortAmount],
    ["报表日库存现金应有余额", calculated.cashOnReportDate],
    ["报表日余额折合本位币金额", calculated.cashOnReportDate],
  ]
    .map(
      ([label, value]) => `
        <div class="cash-count-summary-item">
          <span>${label}</span>
          <strong>${formatMoney(value)}</strong>
        </div>
      `,
    )
    .join("");
}

function calculateCashCountData(data = workpaperState.cashCountData) {
  const denominationAmounts = {};
  let actualCashAmount = 0;

  cashDenominations.forEach((amount) => {
    const key = String(amount);
    const count = parseDisplayMoney(data.denominations?.[key]) || 0;
    const lineAmount = roundMoney(count * amount);
    denominationAmounts[key] = lineAmount;
    actualCashAmount += lineAmount;
  });

  actualCashAmount = roundMoney(actualCashAmount);
  const previousBookBalance = parseDisplayMoney(data.previousBookBalance) || 0;
  const unrecordedIncome = parseDisplayMoney(data.unrecordedIncome) || 0;
  const unrecordedPayment = parseDisplayMoney(data.unrecordedPayment) || 0;
  const reportToCountPayment = parseDisplayMoney(data.reportToCountPayment) || 0;
  const reportToCountIncome = parseDisplayMoney(data.reportToCountIncome) || 0;
  const whiteNoteAmount = parseDisplayMoney(data.whiteNoteAmount) || 0;
  const expectedCashOnCountDate = roundMoney(previousBookBalance + unrecordedIncome - unrecordedPayment);
  const cashDifference = roundMoney(actualCashAmount - expectedCashOnCountDate);
  const longShortAmount = roundMoney(cashDifference + whiteNoteAmount);
  const cashOnReportDate = roundMoney(expectedCashOnCountDate + reportToCountPayment - reportToCountIncome);

  return {
    denominationAmounts,
    actualCashAmount,
    expectedCashOnCountDate,
    cashDifference,
    longShortAmount,
    cashOnReportDate,
  };
}

function roundMoney(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function formatMoney(value) {
  return (Number(value) || 0).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatDenominationLabel(amount) {
  return `${amount}元`;
}

function hasCashCountData() {
  const data = workpaperState.cashCountData;
  return Boolean(
    data.countDate ||
      data.previousBookBalance ||
      data.unrecordedIncome ||
      data.unrecordedPayment ||
      data.reportToCountPayment ||
      data.reportToCountIncome ||
      data.whiteNoteCount ||
      data.whiteNoteAmount ||
      data.differenceReason ||
      Object.values(data.denominations || {}).some((value) => String(value || "").trim()),
  );
}

function getCashCountExportData() {
  if (!hasCashCountData()) {
    return null;
  }

  const calculated = calculateCashCountData();
  return {
    ...workpaperState.cashCountData,
    ...calculated,
  };
}

async function runOtherMonetarySupportMatch() {
  const matchableFiles = workpaperState.otherMonetarySupportFiles.filter((file) =>
    ["对账单", "调节表"].includes(file.supportType),
  );

  if (!matchableFiles.length) {
    setStatusText(
      otherMonetaryUploadStatus,
      "请先上传对账单或调节表，再点击“开始匹配”。",
    );
    return;
  }

  if (!workpaperState.otherMonetaryItems.length) {
    setStatusText(otherMonetaryUploadStatus, "请先在底稿生成页上传科目余额表，或手动新增其他货币资金项目行。");
    return;
  }

  matchOtherMonetarySupportButton.disabled = true;
  setStatusText(otherMonetaryUploadStatus, "正在解析并匹配其他货币资金资料...");

  try {
    clearOtherMonetarySupportMatches();
    const parsedByType = {
      statement: [],
      reconciliation: [],
    };

    for (const supportFile of matchableFiles) {
      const parsedItems = await parseOtherMonetarySupportFile(supportFile);

      if (supportFile.supportType === "对账单") {
        parsedByType.statement.push(...parsedItems);
      }

      if (supportFile.supportType === "调节表") {
        parsedByType.reconciliation.push(...parsedItems);
      }
    }

    const summaries = [];

    if (parsedByType.statement.length) {
      const count = applyOtherMonetaryStatementMatches(parsedByType.statement);
      summaries.push(`对账单匹配 ${count} 条`);
    }

    if (parsedByType.reconciliation.length) {
      const count = applyOtherMonetaryReconciliationMatches(parsedByType.reconciliation);
      summaries.push(`调节表匹配 ${count} 条`);
    }

    setStatusText(
      otherMonetaryUploadStatus,
      summaries.length
        ? `匹配完成：${summaries.join("，")}。请复核下方项目行状态和风险提示。`
        : "资料已解析，但暂未匹配到项目行。请检查项目名称、账号和期末未审数是否一致。",
    );
  } catch (error) {
    setStatusText(otherMonetaryUploadStatus, getFriendlyFetchError(error));
  } finally {
    matchOtherMonetarySupportButton.disabled = false;
  }

  renderOtherMonetaryRows();
}

async function parseOtherMonetarySupportFile(supportFile) {
  const { file, supportType } = supportFile;

  if (!file) {
    return [];
  }

  if (supportType === "对账单") {
    const result = await postFileForParsing("/api/parse-bank-statement", file);
    return (result.statements || []).map((item) => ({
      ...item,
      sourceFile: item.sourceFile || file.name,
    }));
  }

  if (supportType === "调节表") {
    const result = await postFileForParsing("/api/parse-bank-reconciliation", file);
    return (result.reconciliations || []).map((item) => ({
      ...item,
      sourceFile: item.sourceFile || file.name,
    }));
  }

  return [];
}

async function parseCashLargeTransactionsFromUploads() {
  const sourceFiles = workpaperState.cashLargeSourceFiles || [];

  if (!sourceFiles.length) {
    setStatusText(cashLargeTransactionsStatus, "请先返回现金监盘记录及追溯表，上传大额收支检查表。");
    return;
  }

  parseCashLargeTransactionsButton.disabled = true;
  setStatusText(cashLargeTransactionsStatus, "正在读取已上传的现金大额收支检查表...");

  try {
    const rows = [];

    for (const sourceFile of sourceFiles) {
      const result = await postFileForParsing("/api/parse-large-transactions", sourceFile.file);
      rows.push(
        ...(result.transactions || []).map((item) => ({
          ...item,
          sourceFile: sourceFile.name,
          sourceType: sourceFile.sourceType,
        })),
      );
    }

    workpaperState.cashLargeTransactions = rows;
    workpaperState.cashLargeTransactionPage = 0;
    setStatusText(
      cashLargeTransactionsStatus,
      rows.length
        ? `已生成 ${rows.length} 条现金大额收支抽查记录。审查结果 1-6 请人工核对。`
        : "已读取资料，但没有识别到可填入模板的记录。请检查表头是否包含日期、凭证号、摘要、对方科目、借贷金额。",
    );
  } catch (error) {
    setStatusText(cashLargeTransactionsStatus, getFriendlyFetchError(error));
  } finally {
    parseCashLargeTransactionsButton.disabled = false;
  }

  renderCashLargeTransactionRows();
}

async function parseCashCutoffFromUploads() {
  const sourceFiles = workpaperState.cashCutoffSourceFiles || [];

  if (!sourceFiles.length) {
    setStatusText(cashCutoffStatus, "请先返回现金监盘记录及追溯表，上传截止测试资料。");
    return;
  }

  parseCashCutoffButton.disabled = true;
  setStatusText(cashCutoffStatus, "正在读取已上传的现金收支截止测试资料...");

  try {
    const rows = [];

    for (const sourceFile of sourceFiles) {
      const result = await postFileForParsing("/api/parse-cutoff-transactions", sourceFile.file);
      rows.push(
        ...(result.transactions || []).map((item) => ({
          ...toCutoffTransactionRow(item),
          sourceFile: sourceFile.name,
          sourceType: sourceFile.sourceType,
        })),
      );
    }

    workpaperState.cashCutoffTransactions = rows;
    workpaperState.cashCutoffTransactionPage = 0;
    applyInferredCutoffDate("cashCutoffDate", cashCutoffDateInput, rows);
    setStatusText(
      cashCutoffStatus,
      rows.length
        ? `已生成 ${rows.length} 条现金收支截止测试记录。系统只按日期分上下半段，归属期请人工核对。`
        : "已读取资料，但没有识别到可填入模板的记录。请检查表头是否包含日期、凭证号、摘要、借贷金额。",
    );
  } catch (error) {
    setStatusText(cashCutoffStatus, getFriendlyFetchError(error));
  } finally {
    parseCashCutoffButton.disabled = false;
  }

  renderCashCutoffTransactionRows();
}

async function parseOtherMonetaryLargeTransactionsFromUploads() {
  const largeTransactionFiles = workpaperState.otherMonetarySupportFiles.filter(
    (file) => file.supportType === "大额收付检查表",
  );

  if (!largeTransactionFiles.length) {
    setStatusText(
      otherMonetaryLargeTransactionsStatus,
      "请先返回其他货币资金测试表，上传大额收付检查表。",
    );
    return;
  }

  parseOtherMonetaryLargeTransactionsButton.disabled = true;
  setStatusText(otherMonetaryLargeTransactionsStatus, "正在读取大额收支抽查资料...");

  try {
    const rows = [];

    for (const supportFile of largeTransactionFiles) {
      const result = await postFileForParsing("/api/parse-large-transactions", supportFile.file);
      rows.push(
        ...(result.transactions || []).map((item) => ({
          ...item,
          sourceFile: supportFile.name,
        })),
      );
    }

    workpaperState.otherMonetaryLargeTransactions = rows;
    workpaperState.otherMonetaryLargeTransactionPage = 0;
    setStatusText(
      otherMonetaryLargeTransactionsStatus,
      rows.length
        ? `已生成 ${rows.length} 条大额收支抽查记录。审查结果 1-6 请人工核对后在 Excel 中勾选。`
        : "已读取资料，但没有识别到可填入模板的记录。请检查表头是否包含日期、凭证号、摘要、科目、借贷金额。",
    );
  } catch (error) {
    setStatusText(otherMonetaryLargeTransactionsStatus, getFriendlyFetchError(error));
  } finally {
    parseOtherMonetaryLargeTransactionsButton.disabled = false;
  }

  renderOtherMonetaryLargeTransactionRows();
}

async function parseOtherMonetaryCutoffFromUploads() {
  const cutoffFiles = workpaperState.otherMonetarySupportFiles.filter(
    (file) => file.supportType === "截止测试资料",
  );

  if (!cutoffFiles.length) {
    setStatusText(
      otherMonetaryCutoffStatus,
      "请先返回其他货币资金测试表，上传截止测试资料。",
    );
    return;
  }

  parseOtherMonetaryCutoffButton.disabled = true;
  setStatusText(otherMonetaryCutoffStatus, "正在读取其他货币资金截止测试资料...");

  try {
    const rows = [];

    for (const supportFile of cutoffFiles) {
      const result = await postFileForParsing("/api/parse-cutoff-transactions", supportFile.file);
      rows.push(
        ...(result.transactions || []).map((item) => ({
          ...toCutoffTransactionRow(item),
          sourceFile: supportFile.name,
        })),
      );
    }

    workpaperState.otherMonetaryCutoffTransactions = rows;
    workpaperState.otherMonetaryCutoffTransactionPage = 0;
    applyInferredCutoffDate("otherMonetaryCutoffDate", otherMonetaryCutoffDateInput, rows);
    setStatusText(
      otherMonetaryCutoffStatus,
      rows.length
        ? `已生成 ${rows.length} 条其他货币资金截止测试记录。系统只按日期分上下半段，归属期请人工核对。`
        : "已读取资料，但没有识别到可填入模板的记录。请检查表头是否包含日期、凭证号、摘要、借贷金额。",
    );
  } catch (error) {
    setStatusText(otherMonetaryCutoffStatus, getFriendlyFetchError(error));
  } finally {
    parseOtherMonetaryCutoffButton.disabled = false;
  }

  renderOtherMonetaryCutoffTransactionRows();
}

async function parseBankLargeTransactionsFromUploads() {
  const largeTransactionFiles = workpaperState.bankLocalFiles.largeTransactions || [];

  if (!largeTransactionFiles.length) {
    setStatusText(
      bankLargeTransactionsStatus,
      "请先返回银行存款测试表，上传大额收付检查表。",
    );
    return;
  }

  parseBankLargeTransactionsButton.disabled = true;
  setStatusText(bankLargeTransactionsStatus, "正在读取银行存款大额收支抽查资料...");

  try {
    const rows = [];

    for (const file of largeTransactionFiles) {
      const result = await postFileForParsing("/api/parse-large-transactions", file);
      rows.push(
        ...(result.transactions || []).map((item) => ({
          ...item,
          sourceFile: file.name,
        })),
      );
    }

    workpaperState.bankLargeTransactions = rows;
    workpaperState.bankLargeTransactionPage = 0;
    setStatusText(
      bankLargeTransactionsStatus,
      rows.length
        ? `已生成 ${rows.length} 条银行存款大额收支抽查记录。审查结果 1-6 请人工核对后在 Excel 中勾选。`
        : "已读取资料，但没有识别到可填入模板的记录。请检查表头是否包含日期、凭证号、摘要、科目、借贷金额。",
    );
  } catch (error) {
    setStatusText(bankLargeTransactionsStatus, getFriendlyFetchError(error));
  } finally {
    parseBankLargeTransactionsButton.disabled = false;
  }

  renderBankLargeTransactionRows();
}

async function parseBankCutoffFromUploads() {
  const cutoffFiles = workpaperState.bankLocalFiles.cutoffTransactions || [];

  if (!cutoffFiles.length) {
    setStatusText(
      bankCutoffStatus,
      "请先返回银行存款测试表，上传截止测试资料。",
    );
    return;
  }

  parseBankCutoffButton.disabled = true;
  setStatusText(bankCutoffStatus, "正在读取银行存款截止测试资料...");

  try {
    const rows = [];

    for (const file of cutoffFiles) {
      const result = await postFileForParsing("/api/parse-cutoff-transactions", file);
      rows.push(
        ...(result.transactions || []).map((item) => ({
          ...toCutoffTransactionRow(item),
          sourceFile: file.name,
        })),
      );
    }

    workpaperState.bankCutoffTransactions = rows;
    workpaperState.bankCutoffTransactionPage = 0;
    applyInferredCutoffDate("bankCutoffDate", bankCutoffDateInput, rows);
    setStatusText(
      bankCutoffStatus,
      rows.length
        ? `已生成 ${rows.length} 条银行存款截止测试记录。系统只按日期分上下半段，归属期请人工核对。`
        : "已读取资料，但没有识别到可填入模板的记录。请检查表头是否包含日期、凭证号、摘要、借贷金额。",
    );
  } catch (error) {
    setStatusText(bankCutoffStatus, getFriendlyFetchError(error));
  } finally {
    parseBankCutoffButton.disabled = false;
  }

  renderBankCutoffTransactionRows();
}

function toCutoffTransactionRow(item = {}) {
  return {
    year: String(item.year || "").trim(),
    month: String(item.month || "").trim(),
    day: String(item.day || "").trim(),
    voucherNo: String(item.voucherNo || "").trim(),
    summary: String(item.summary || "").trim(),
    debitAmount: String(item.debitAmount || "").trim(),
    creditAmount: String(item.creditAmount || "").trim(),
  };
}

function applyInferredCutoffDate(stateKey, inputNode, rows) {
  if (workpaperState[stateKey]) {
    return;
  }

  const inferredDate = inferCutoffDateFromRows(rows);
  workpaperState[stateKey] = inferredDate;

  if (inputNode) {
    inputNode.value = inferredDate;
  }
}

function inferCutoffDateFromRows(rows) {
  const years = rows
    .map((row) => Number(row.year))
    .filter((year) => Number.isFinite(year) && year > 1900);
  const januaryYears = rows
    .filter((row) => Number(row.month) === 1)
    .map((row) => Number(row.year))
    .filter((year) => Number.isFinite(year) && year > 1900);
  const inferredYear = januaryYears.length ? Math.min(...januaryYears) - 1 : Math.max(...years);

  if (!Number.isFinite(inferredYear) || inferredYear < 1900) {
    return "";
  }

  return `${inferredYear}-12-31`;
}

async function postFileForParsing(endpoint, file) {
  if (isOnlineDemo) {
    throw new Error(getOnlineDemoMessage());
  }

  const fileBase64 = await readFileAsBase64(file);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileName: file.name,
      fileBase64,
    }),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "资料解析失败");
  }

  return result;
}

function clearOtherMonetarySupportMatches() {
  workpaperState.otherMonetaryItems = workpaperState.otherMonetaryItems.map((item) => ({
    ...item,
    statementMatch: "",
    statementBalance: "",
    statementSourceFile: "",
    reconciliationMatch: "",
    reconciliationBalance: "",
    reconciliationSourceFile: "",
  }));
}

function applyOtherMonetaryStatementMatches(statements) {
  let matchCount = 0;

  workpaperState.otherMonetaryItems = workpaperState.otherMonetaryItems.map((item) => {
    const matched = findMatchingOtherMonetarySupportItem(item, statements);

    if (!matched) {
      return {
        ...item,
        statementMatch: "missing",
      };
    }

    const isMatchedBalance = isSameMoney(item.endingBalance, matched.balance);
    matchCount += 1;

    return {
      ...item,
      statementMatch: isMatchedBalance ? "matched" : "mismatch",
      statementBalance: matched.balance || "",
      statementSourceFile: matched.sourceFile || "",
    };
  });

  return matchCount;
}

function applyOtherMonetaryReconciliationMatches(reconciliations) {
  let matchCount = 0;

  workpaperState.otherMonetaryItems = workpaperState.otherMonetaryItems.map((item) => {
    const matched = findMatchingOtherMonetarySupportItem(item, reconciliations);

    if (!matched) {
      return {
        ...item,
        reconciliationMatch: "missing",
      };
    }

    const isMatchedBalance = isSameMoney(item.endingBalance, matched.balance);
    matchCount += 1;

    return {
      ...item,
      reconciliationMatch: isMatchedBalance ? "matched" : "mismatch",
      reconciliationBalance: matched.balance || "",
      reconciliationSourceFile: matched.sourceFile || "",
    };
  });

  return matchCount;
}

function findMatchingOtherMonetarySupportItem(item, supportItems) {
  const accountNo = normalizeAccountNo(item.accountNo);
  const bankName = normalizeBankName(item.bankName);
  const projectName = normalizeBankName(item.projectName);

  return supportItems.find((supportItem) => {
    const supportAccountNo = normalizeAccountNo(supportItem.accountNo);
    const supportBankName = normalizeBankName(supportItem.bankName);
    const supportProjectName = normalizeBankName(supportItem.projectName);

    if (accountNo && supportAccountNo && accountNo === supportAccountNo) {
      return true;
    }

    if (bankName && supportBankName && (bankName.includes(supportBankName) || supportBankName.includes(bankName))) {
      return true;
    }

    return (
      projectName &&
      supportProjectName &&
      (projectName.includes(supportProjectName) || supportProjectName.includes(projectName))
    );
  });
}

function renderOtherMonetaryUploadState() {
  if (!otherMonetaryTrialBalanceLabel) {
    return;
  }

  const localTrialBalance = workpaperState.otherMonetarySupportFiles.some(
    (file) => file.supportType === "科目余额表",
  );

  otherMonetaryTrialBalanceLabel.textContent =
    workpaperState.sharedFiles.trialBalance && !localTrialBalance
      ? "已从资料池取得科目余额表"
      : localTrialBalance
        ? "已选科目余额表"
        : "从底稿生成页取得科目余额表";
}

async function parseTrialBalanceFile(file, statusNode = uploadHint) {
  if (isOnlineDemo) {
    setStatusText(statusNode, getOnlineDemoMessage());
    return;
  }

  if (!file.name.toLowerCase().endsWith(".xlsx")) {
    setStatusText(statusNode, "已登记科目余额表。自动读取第一版先支持 .xlsx 文件。");
    return;
  }

  try {
    setStatusText(statusNode, "正在读取科目余额表，识别银行存款账户和其他货币资金项目...");
    const fileBase64 = await readFileAsBase64(file);
    const response = await fetch("/api/parse-trial-balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: file.name,
        fileBase64,
      }),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "科目余额表读取失败");
    }

    if (result.accounts?.length) {
      workpaperState.bankAccounts = result.accounts.map((account) => ({
        bankName: account.bankName || "",
        accountNo: account.accountNo || "",
        endingBalance: account.endingBalance || "",
        hasStatement: "auto",
        reconciliationStatus: "pending",
        confirmationStatus: "should",
        adjustmentDebit: "",
        adjustmentCredit: "",
      }));
    }

    if (result.otherMonetaryItems?.length) {
      workpaperState.otherMonetaryItems = result.otherMonetaryItems.map((item) => ({
        projectName: item.projectName || "",
        bankName: item.bankName || "",
        accountNo: item.accountNo || "",
        accountDescription: item.accountDescription || "",
        endingBalance: item.endingBalance || "",
        hasStatement: "auto",
        reconciliationStatus: "pending",
        adjustmentDebit: "",
        adjustmentCredit: "",
        riskNote: getOtherMonetaryReviewNote(item),
      }));
    }

    if (result.accounts?.length || result.otherMonetaryItems?.length) {
      const matchSummary = applyStoredBankSupportMatches();
      const parts = [];

      if (result.accounts?.length) {
        parts.push(`${result.accounts.length} 个银行存款账户`);
      }

      if (result.otherMonetaryItems?.length) {
        parts.push(`${result.otherMonetaryItems.length} 个其他货币资金项目`);
      }

      setStatusText(
        statusNode,
        `已登记“科目余额表”，并识别到 ${parts.join("、")}，已自动填入相关测试表。${matchSummary ? `同时已匹配：${matchSummary}。` : ""}`,
      );
      renderBankAccountRows();
      renderOtherMonetaryRows();
      return;
    }

    setStatusText(statusNode, result.diagnostics?.[0] || "已登记科目余额表，但暂未识别到货币资金明细。");
  } catch (error) {
    setStatusText(
      statusNode,
      getFriendlyFetchError(error, "科目余额表读取失败，请先手动填制银行账户信息。"),
    );
  }
}

async function parseBankSupportFile(file, mode, statusNode = uploadHint, appendItems = false) {
  const materialName = mode === "statement" ? "银行对账单" : "银行存款余额调节表";
  const endpoint =
    mode === "statement" ? "/api/parse-bank-statement" : "/api/parse-bank-reconciliation";

  if (mode !== "statement" && !file.name.toLowerCase().endsWith(".xlsx")) {
    workpaperState.recognitionStatus[mode] = "unsupported";
    setStatusText(statusNode, `已登记“${materialName}”。自动读取第一版先支持 .xlsx 文件，扫描件和图片后续再接 OCR。`);
    return;
  }

  try {
    setStatusText(statusNode, `正在读取${materialName}，匹配银行存款测试表账户...`);
    const fileBase64 = await readFileAsBase64(file);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: file.name,
        fileBase64,
      }),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `${materialName}读取失败`);
    }

    const parsedItems = mode === "statement" ? result.statements || [] : result.reconciliations || [];
    const items = parsedItems.map((item) => ({
      ...item,
      sourceFile: item.sourceFile || file.name,
    }));
    const storedItems = appendItems ? [...workpaperState.bankSupportItems[mode], ...items] : items;

    workpaperState.recognitionStatus[mode] = storedItems.length ? "parsed" : "empty";
    workpaperState.bankSupportItems[mode] = storedItems;
    const matchCount =
      mode === "statement"
        ? applyBankStatementMatches(storedItems)
        : applyBankReconciliationMatches(storedItems);

    setStatusText(statusNode, items.length
      ? `已登记“${materialName}”，累计识别到 ${storedItems.length} 条记录，其中 ${matchCount} 条已匹配到银行存款测试表。`
      : result.diagnostics?.[0] || `已登记“${materialName}”，但暂未识别到可匹配的账号和余额。`);
    renderBankAccountRows();
  } catch (error) {
    workpaperState.recognitionStatus[mode] = "failed";
    setStatusText(
      statusNode,
      getFriendlyFetchError(error, `${materialName}读取失败，请先手动判断对应账户状态。`),
    );
  }
}

function setStatusText(statusNode, message) {
  if (statusNode) {
    statusNode.textContent = message;
  }
}

function getFriendlyFetchError(error, fallbackMessage = "资料读取失败，请稍后再试。") {
  const message = error?.message || "";

  if (message.includes("Failed to fetch")) {
    return "无法连接本地解析服务。请确认页面是从 http://localhost:4173/ 打开的，并且终端里的 node server.js 正在运行。";
  }

  return message || fallbackMessage;
}

function applyBankStatementMatches(statements) {
  let matchCount = 0;

  workpaperState.bankAccounts = workpaperState.bankAccounts.map((account) => {
    const matched = findMatchingBankSupportItem(account, statements);

    if (!matched) {
      return {
        ...account,
        hasStatement: account.hasStatement === "yes" || account.hasStatement === "no" ? account.hasStatement : "auto",
        statementBalance: "",
        statementMatch: "missing",
      };
    }

    const matchedBalance = getMatchedSupportBalance(account, matched);
    const isMatchedBalance = isSameMoney(account.endingBalance, matchedBalance);
    matchCount += 1;

    return {
      ...account,
      hasStatement: account.hasStatement === "yes" || account.hasStatement === "no" ? account.hasStatement : "auto",
      statementBalance: matchedBalance || matched.balance,
      statementAccountNo: matched.accountNo || "",
      statementSourceFile: matched.sourceFile || "",
      statementSourceType: matched.source || "",
      statementMatch: isMatchedBalance ? "matched" : "mismatch",
    };
  });

  return matchCount;
}

function clearBankStatementMatches() {
  workpaperState.bankAccounts = workpaperState.bankAccounts.map((account) => ({
    ...account,
    statementBalance: "",
    statementAccountNo: "",
    statementSourceFile: "",
    statementSourceType: "",
    statementMatch: "",
  }));
}

function applyBankReconciliationMatches(reconciliations) {
  let matchCount = 0;

  workpaperState.bankAccounts = workpaperState.bankAccounts.map((account) => {
    const matched = findMatchingBankSupportItem(account, reconciliations);

    if (!matched) {
      return {
        ...account,
        reconciliationMatch: "missing",
      };
    }

    const matchedBalance = getMatchedSupportBalance(account, matched);
    const isMatchedBalance = isSameMoney(account.endingBalance, matchedBalance);
    matchCount += 1;

    return {
      ...account,
      reconciliationStatus:
        account.reconciliationStatus === "yes" || account.reconciliationStatus === "no"
          ? account.reconciliationStatus
          : "pending",
      reconciliationBalance: matchedBalance || matched.balance,
      reconciliationBookBalance: matched.bookBalance || account.endingBalance || "",
      reconciliationStatementBalance: matched.bankStatementBalance || "",
      reconciliationAdjustedBankBalance: matched.adjustedBankBalance || matched.balance || "",
      reconciliationAdjustedBookBalance: matched.adjustedBookBalance || matched.balance || "",
      reconciliationCurrency: matched.currency || "人民币",
      reconciliationAdjustments: matched.adjustments || {},
      reconciliationConclusion: matched.conclusion || "",
      reconciliationAccountNo: matched.accountNo || "",
      reconciliationSourceFile: matched.sourceFile || "",
      reconciliationMatch: isMatchedBalance ? "matched" : "mismatch",
    };
  });

  return matchCount;
}

function clearBankReconciliationMatches() {
  workpaperState.bankAccounts = workpaperState.bankAccounts.map((account) => ({
    ...account,
    reconciliationBalance: "",
    reconciliationBookBalance: "",
    reconciliationStatementBalance: "",
    reconciliationAdjustedBankBalance: "",
    reconciliationAdjustedBookBalance: "",
    reconciliationCurrency: "",
    reconciliationAdjustments: {},
    reconciliationConclusion: "",
    reconciliationAccountNo: "",
    reconciliationSourceFile: "",
    reconciliationMatch: "",
  }));
}

function applyStoredBankSupportMatches() {
  const summaries = [];

  if (workpaperState.bankSupportItems.statement.length) {
    const statementMatches = applyBankStatementMatches(workpaperState.bankSupportItems.statement);
    summaries.push(`对账单匹配 ${statementMatches} 条`);
  }

  if (workpaperState.bankSupportItems.reconciliation.length) {
    const reconciliationMatches = applyBankReconciliationMatches(
      workpaperState.bankSupportItems.reconciliation,
    );
    summaries.push(`余额调节表匹配 ${reconciliationMatches} 条`);
  }

  return summaries.join("，");
}

function getMatchedSupportBalance(account, supportItem) {
  const candidates = Array.isArray(supportItem.balanceCandidates)
    ? supportItem.balanceCandidates
    : [supportItem.balance];

  return candidates.find((candidate) => isSameMoney(account.endingBalance, candidate)) || "";
}

function findMatchingBankSupportItem(account, items) {
  const accountNo = normalizeAccountNo(account.accountNo);
  const bankName = normalizeBankName(account.bankName);

  return items.find((item) => {
    const itemAccountNo = normalizeAccountNo(item.accountNo);
    const itemBankName = normalizeBankName(item.bankName);

    if (accountNo && itemAccountNo && accountNo === itemAccountNo) {
      return true;
    }

    return bankName && itemBankName && (bankName.includes(itemBankName) || itemBankName.includes(bankName));
  });
}

function normalizeAccountNo(value) {
  return String(value || "").replace(/\D/g, "");
}

function normalizeBankName(value) {
  return String(value || "")
    .replace(/\s/g, "")
    .trim();
}

function isSameMoney(left, right) {
  const leftNumber = parseDisplayMoney(left);
  const rightNumber = parseDisplayMoney(right);

  if (leftNumber === null || rightNumber === null) {
    return false;
  }

  return Math.abs(leftNumber - rightNumber) < 0.01;
}

function parseDisplayMoney(value) {
  const normalized = String(value === null || value === undefined ? "" : value)
    .replace(/,/g, "")
    .replace(/\s/g, "")
    .trim();
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : null;
}

function formatReconciliationAmount(value) {
  const amount = parseDisplayMoney(value);

  if (amount === null) {
    return "待人工复核";
  }

  return amount.toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function getBankReconciliationExportRows() {
  return workpaperState.bankAccounts
    .map((account) => {
      const adjustments = account.reconciliationAdjustments || {};
      const hasReconciliationData = hasUploadedReconciliationData(account, adjustments);

      if (!hasReconciliationData) {
        return null;
      }

      return {
        bankName: (account.bankName || "").trim(),
        accountNo: (account.accountNo || "").trim(),
        currency: account.reconciliationCurrency || "人民币",
        bookBalance: account.reconciliationBookBalance || account.endingBalance || "",
        bankStatementBalance: account.reconciliationStatementBalance || account.statementBalance || "",
        adjustedBankBalance: account.reconciliationAdjustedBankBalance || account.reconciliationBalance || "",
        adjustedBookBalance: account.reconciliationAdjustedBookBalance || account.reconciliationBalance || "",
        conclusion: account.reconciliationConclusion || getReconciliationConclusionLabel(resolveReconciliationStatus(account)),
        adjustments,
      };
    })
    .filter(Boolean);
}

function hasUploadedReconciliationData(account, adjustments = {}) {
  if (["matched", "mismatch"].includes(account.reconciliationMatch)) {
    return true;
  }

  return Boolean(
    account.reconciliationSourceFile ||
      account.reconciliationAccountNo ||
      account.reconciliationBookBalance ||
      account.reconciliationStatementBalance ||
      account.reconciliationAdjustedBankBalance ||
      account.reconciliationAdjustedBookBalance ||
      account.reconciliationBalance ||
      Object.values(adjustments).some((value) => parseDisplayMoney(value) !== null),
  );
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = () => reject(new Error("读取本地文件失败。"));
    reader.readAsDataURL(file);
  });
}

function deleteUploadedFile(uploadId) {
  const deletedFile = workpaperState.uploadedFiles.find((file) => file.id === uploadId);

  workpaperState.uploadedFiles = workpaperState.uploadedFiles.filter(
    (file) => file.id !== uploadId,
  );

  if (
    deletedFile &&
    !workpaperState.uploadedFiles.some((file) => file.materialType === deletedFile.materialType)
  ) {
    workpaperState.providedMaterials.delete(deletedFile.materialType);

    if (deletedFile.materialType === "科目余额表") {
      workpaperState.sharedFiles.trialBalance = null;
    }
  }

  uploadHint.textContent = deletedFile
    ? `已删除“${deletedFile.name}”，资料缺口已重新计算。`
    : "资料缺口已重新计算。";
  renderWorkpaperBuilder();
}

function renderUploadedFiles() {
  if (!uploadedFileList || !uploadedCount) {
    return;
  }

  uploadedCount.textContent = `${workpaperState.uploadedFiles.length} 个`;
  uploadedFileList.innerHTML = workpaperState.uploadedFiles.length
    ? workpaperState.uploadedFiles
        .map(
          (file) => `
            <div class="uploaded-file-item">
              <div>
                <strong>${file.name}</strong>
                <span>${file.materialType} · ${formatFileSize(file.size)}</span>
              </div>
              <button class="delete-upload" data-upload-id="${file.id}" type="button" aria-label="删除 ${file.name}">×</button>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-gap">还没有登记资料。你可以先上传脱敏测试文件，并手动选择资料类型。</div>`;

  uploadedFileList.querySelectorAll(".delete-upload").forEach((button) => {
    button.addEventListener("click", () => {
      deleteUploadedFile(button.dataset.uploadId);
    });
  });
}

function renderSamplingCenter() {
  if (!samplingTaskList) {
    return;
  }

  const sourceFiles = getSamplingSourceFiles();
  samplingSourceStatus.textContent = sourceFiles.length
    ? `已识别 ${sourceFiles.length} 份可用于抽凭的通用资料`
    : "请先在底稿生成页上传序时账或现金日记账";

  samplingTaskList.innerHTML = samplingTasks
    .map((task) => {
      const taskState = getSamplingTaskState(task.id);
      return `
        <button class="sampling-task-item ${task.id === workpaperState.samplingActiveTaskId ? "active" : ""}" data-sampling-task-id="${task.id}" type="button">
          <strong>${task.name}</strong>
          <span>${task.subject} · ${task.type === "large" ? "大额收支" : "截止测试"}</span>
          <small>${taskState.status} · 已确认 ${taskState.confirmed.length} 条</small>
        </button>
      `;
    })
    .join("");

  samplingTaskList.querySelectorAll("[data-sampling-task-id]").forEach((button) => {
    button.addEventListener("click", () => {
      workpaperState.samplingActiveTaskId = button.dataset.samplingTaskId;
      renderSamplingCenter();
    });
  });

  renderActiveSamplingTask();
}

function renderActiveSamplingTask() {
  const task = getActiveSamplingTask();
  const taskState = getSamplingTaskState(task.id);
  const cutoffDateField = samplingCutoffDateInput?.closest(".inline-field");
  const cutoffDaysField = samplingCutoffDaysInput?.closest(".inline-field");

  samplingTaskTitle.textContent = task.name;
  samplingTaskStatus.textContent = taskState.status;
  samplingTaskDescription.textContent = task.description;
  renderSamplingReviewGuide(task);
  samplingAmountThresholdInput.value = taskState.amountThreshold;
  samplingCutoffDateInput.value = taskState.cutoffDate;
  samplingCutoffDaysInput.value = taskState.cutoffDays;
  samplingKeywordsInput.value = taskState.keywords;

  if (cutoffDateField) {
    cutoffDateField.hidden = true;
  }

  if (cutoffDaysField) {
    cutoffDaysField.hidden = task.type !== "cutoff";
  }

  samplingCutoffDateInput.disabled = true;
  samplingCutoffDaysInput.disabled = task.type !== "cutoff";

  if (returnSamplingToWorkpaperButton) {
    returnSamplingToWorkpaperButton.textContent =
      workpaperState.samplingReturnTargetId === task.id ? "带回本底稿" : "返回对应底稿";
  }

  renderSamplingCandidates(taskState.candidates);
  renderSamplingConfirmed(taskState.confirmed);
}

function renderSamplingReviewGuide(task) {
  if (samplingReviewPoints) {
    samplingReviewPoints.innerHTML = (task.reviewPoints || [])
      .map((point) => `<li>${escapeHtml(point)}</li>`)
      .join("");
  }

  if (samplingNextAction) {
    samplingNextAction.textContent =
      "下一步：勾选样本并点击“确认选中样本”，再点击“带回本底稿”，系统会返回对应底稿并填入预览表，复核后即可导出 Excel。";
  }
}

function renderSamplingCandidates(candidates) {
  if (!samplingCandidateList) {
    return;
  }

  const selectedCount = candidates.filter((item) => item.selected).length;

  samplingCandidateList.innerHTML = candidates.length
    ? `
        <div class="sampling-select-toolbar">
          <label>
            <input id="sampling-select-all" type="checkbox" ${selectedCount === candidates.length ? "checked" : ""} />
            勾选全部
          </label>
          <span>已勾选 ${selectedCount} / ${candidates.length} 条</span>
        </div>
        ${candidates
        .map(
          (item) => `
            <label class="sampling-row sampling-list-row">
              <input class="sampling-check" type="checkbox" data-sampling-candidate-id="${escapeHtml(item.id)}" ${item.selected ? "checked" : ""} />
              <span class="sampling-main">
                <strong>${escapeHtml(item.dateText || "日期待补")} · ${escapeHtml(item.voucherNo || "凭证号待补")}</strong>
                <small>${escapeHtml(item.summary || "摘要待补")}</small>
                <span class="sampling-meta">
                  <small>${escapeHtml(item.direction)} ${formatSamplingAmount(item.amount)}</small>
                  <small>对方科目：${escapeHtml(formatSamplingCounterparty(item))}</small>
                  <small>${escapeHtml(item.reason)}</small>
                </span>
              </span>
            </label>
          `,
        )
        .join("")}
      `
    : `<div class="empty-gap">还没有抽样备选记录。请设置规则后点击“生成抽样备选池”。</div>`;

  const selectAllInput = samplingCandidateList.querySelector("#sampling-select-all");
  selectAllInput?.addEventListener("change", () => {
    const taskState = getSamplingTaskState(workpaperState.samplingActiveTaskId);
    taskState.candidates.forEach((item) => {
      item.selected = selectAllInput.checked;
    });
    syncConfirmedSamplesFromSelection(taskState);
    renderSamplingCenter();
  });

  samplingCandidateList.querySelectorAll("[data-sampling-candidate-id]").forEach((input) => {
    input.addEventListener("change", () => {
      const taskState = getSamplingTaskState(workpaperState.samplingActiveTaskId);
      const candidate = taskState.candidates.find((item) => item.id === input.dataset.samplingCandidateId);
      if (candidate) {
        candidate.selected = input.checked;
      }
      syncConfirmedSamplesFromSelection(taskState);
      renderSamplingCenter();
    });
  });
}

function renderSamplingConfirmed(confirmed) {
  if (!samplingConfirmedList) {
    return;
  }

  samplingConfirmedList.innerHTML = confirmed.length
    ? confirmed
        .map(
          (item) => `
            <div class="sampling-row sampling-list-row confirmed">
              <span class="sampling-main">
                <strong>${escapeHtml(item.dateText || "日期待补")} · ${escapeHtml(item.voucherNo || "凭证号待补")}</strong>
                <small>${escapeHtml(item.summary || "摘要待补")}</small>
                <span class="sampling-meta">
                  <small>${escapeHtml(item.direction)} ${formatSamplingAmount(item.amount)}</small>
                  <small>对方科目：${escapeHtml(formatSamplingCounterparty(item))}</small>
                  <small>${escapeHtml(item.sourceFile || "来源待补")}</small>
                </span>
              </span>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-gap">还没有确认样本。请先在左侧备选池勾选记录并点击“确认选中样本”。</div>`;
}

function updateActiveSamplingRuleFromInputs() {
  const taskState = getSamplingTaskState(workpaperState.samplingActiveTaskId);

  taskState.amountThreshold = samplingAmountThresholdInput.value;
  taskState.cutoffDate = samplingCutoffDateInput.value;
  taskState.cutoffDays = samplingCutoffDaysInput.value;
  taskState.keywords = samplingKeywordsInput.value;
}

async function generateSamplingCandidates() {
  const task = getActiveSamplingTask();
  const taskState = getSamplingTaskState(task.id);
  const sourceFiles = getSamplingSourceFiles(task);

  if (!sourceFiles.length) {
    setStatusText(samplingStatusMessage, "请先在底稿生成页上传序时账或现金日记账。");
    return;
  }

  updateActiveSamplingRuleFromInputs();
  generateSamplingCandidatesButton.disabled = true;
  setStatusText(samplingStatusMessage, "正在读取资料并生成抽样备选池...");

  try {
    const parsedRows = [];

    for (const source of sourceFiles) {
      const result = await postFileForParsing("/api/parse-ledger-transactions", source.file);
      parsedRows.push(
        ...(result.transactions || []).map((item) => ({
          ...item,
          sourceFile: source.name,
          sourceMaterialType: source.materialType,
        })),
      );
    }

    applyInferredAuditPeriodFromRows(parsedRows, "抽凭来源资料");
    taskState.candidates = buildSamplingCandidates(parsedRows, task, taskState);
    taskState.status = taskState.candidates.length ? "已生成备选池" : "未生成";
    setStatusText(
      samplingStatusMessage,
      taskState.candidates.length
        ? `已生成 ${taskState.candidates.length} 条备选样本。请人工勾选后确认。`
        : "已读取资料，但没有符合当前规则的备选样本。可降低金额阈值、扩大期间或补充关键词后重试。",
    );
  } catch (error) {
    setStatusText(samplingStatusMessage, getFriendlyFetchError(error));
  } finally {
    generateSamplingCandidatesButton.disabled = false;
  }

  renderSamplingCenter();
}

function confirmSelectedSamplingSamples() {
  const taskState = getSamplingTaskState(workpaperState.samplingActiveTaskId);
  const selected = taskState.candidates.filter((item) => item.selected);

  if (!selected.length) {
    setStatusText(samplingStatusMessage, "请先在抽样备选池中勾选至少一条样本。");
    return;
  }

  taskState.confirmed = selected.map((item) => ({ ...item }));
  taskState.status = "已确认样本";
  setStatusText(samplingStatusMessage, `已确认 ${taskState.confirmed.length} 条样本，后续可供对应底稿引用。`);
  renderSamplingCenter();
}

function syncConfirmedSamplesFromSelection(taskState) {
  if (taskState.status !== "已确认样本" && !taskState.confirmed.length) {
    return;
  }

  const selected = taskState.candidates.filter((item) => item.selected);
  taskState.confirmed = selected.map((item) => ({ ...item }));
  taskState.status = selected.length ? "已确认样本" : "已生成备选池";
  setStatusText(
    samplingStatusMessage,
    selected.length
      ? `已同步 ${selected.length} 条确认样本。`
      : "已取消全部确认样本。请重新勾选并点击“确认选中样本”。",
  );
}

function returnSamplingSamplesToWorkpaper() {
  const task = getActiveSamplingTask();
  const taskState = getSamplingTaskState(task.id);
  const confirmed = taskState.confirmed || [];

  if (confirmed.length) {
    applySamplingSamplesToWorkpaper(task.id, confirmed);
    setSamplingWorkpaperStatus(task.id, `已从抽凭中心带回 ${confirmed.length} 条样本。请在本页继续人工复核后导出 Excel。`);
  } else {
    setSamplingWorkpaperStatus(task.id, "当前抽凭任务还没有确认样本。可先返回抽凭中心勾选确认，或在本页使用自定义上传生成。");
  }

  openSamplingTargetWorkpaper(task.id);
}

function applySamplingSamplesToWorkpaper(taskId, samples) {
  if (taskId.endsWith("-large")) {
    const rows = samples.map(toLargeTransactionRowFromSampling);

    if (taskId === "cash-large") {
      workpaperState.cashLargeTransactions = rows;
      workpaperState.cashLargeTransactionPage = 0;
      return;
    }

    if (taskId === "bank-large") {
      workpaperState.bankLargeTransactions = rows;
      workpaperState.bankLargeTransactionPage = 0;
      return;
    }

    if (taskId === "other-money-large") {
      workpaperState.otherMonetaryLargeTransactions = rows;
      workpaperState.otherMonetaryLargeTransactionPage = 0;
    }

    return;
  }

  const rows = samples.map(toCutoffTransactionRowFromSampling);
  const inferredCutoffDate = formatDateInputValue(inferSamplingCutoffDate(samples));

  if (taskId === "cash-cutoff") {
    workpaperState.cashCutoffTransactions = rows;
    workpaperState.cashCutoffTransactionPage = 0;
    if (inferredCutoffDate) {
      workpaperState.cashCutoffDate = inferredCutoffDate;
    }
    return;
  }

  if (taskId === "bank-cutoff") {
    workpaperState.bankCutoffTransactions = rows;
    workpaperState.bankCutoffTransactionPage = 0;
    if (inferredCutoffDate) {
      workpaperState.bankCutoffDate = inferredCutoffDate;
    }
    return;
  }

  if (taskId === "other-money-cutoff") {
    workpaperState.otherMonetaryCutoffTransactions = rows;
    workpaperState.otherMonetaryCutoffTransactionPage = 0;
    if (inferredCutoffDate) {
      workpaperState.otherMonetaryCutoffDate = inferredCutoffDate;
    }
  }
}

function toLargeTransactionRowFromSampling(item) {
  return {
    month: item.month || "",
    day: item.day || "",
    voucherNo: item.voucherNo || "",
    summary: item.summary || "",
    counterpartyAccount: formatSamplingCounterparty(item),
    debitAmount: item.debitAmount || "",
    creditAmount: item.creditAmount || "",
    sourceFile: item.sourceFile || "抽凭中心",
  };
}

function toCutoffTransactionRowFromSampling(item) {
  return {
    year: item.year || "",
    month: item.month || "",
    day: item.day || "",
    voucherNo: item.voucherNo || "",
    summary: item.summary || "",
    debitAmount: item.debitAmount || "",
    creditAmount: item.creditAmount || "",
    sourceFile: item.sourceFile || "抽凭中心",
  };
}

function setSamplingWorkpaperStatus(taskId, message) {
  const statusNode = getSamplingTargetStatusNode(taskId);
  setStatusText(statusNode, message);
}

function getSamplingTargetStatusNode(taskId) {
  return {
    "cash-large": cashLargeTransactionsStatus,
    "cash-cutoff": cashCutoffStatus,
    "bank-large": bankLargeTransactionsStatus,
    "bank-cutoff": bankCutoffStatus,
    "other-money-large": otherMonetaryLargeTransactionsStatus,
    "other-money-cutoff": otherMonetaryCutoffStatus,
  }[taskId];
}

function openSamplingTargetWorkpaper(taskId) {
  const openers = {
    "cash-large": openRelatedCashLargeTransactionsWorkpaper,
    "cash-cutoff": openRelatedCashCutoffWorkpaper,
    "bank-large": openRelatedBankLargeTransactionsWorkpaper,
    "bank-cutoff": openRelatedBankCutoffWorkpaper,
    "other-money-large": openRelatedOtherMonetaryLargeTransactionsWorkpaper,
    "other-money-cutoff": openRelatedOtherMonetaryCutoffWorkpaper,
  };

  openers[taskId]?.();
}

function buildSamplingCandidates(rows, task, taskState) {
  const threshold = parseDisplayMoney(taskState.amountThreshold) || 0;
  const keywords = parseSamplingKeywords(taskState.keywords);
  const cutoffDays = Number(taskState.cutoffDays || task.defaultCutoffDays || 0);
  const normalizedRows = rows
    .map((row, index) => normalizeSamplingRow(row, task, index))
    .filter((row) => isSamplingRowInTaskSubject(row, task));
  const cutoffDate = task.type === "cutoff" ? inferSamplingCutoffDate(normalizedRows) : null;

  return normalizedRows
    .filter((row) => {
      if (threshold && row.amount < threshold) {
        return false;
      }

      if (keywords.length && !keywords.some((keyword) => row.summary.includes(keyword))) {
        return false;
      }

      if (task.type === "cutoff" && cutoffDate) {
        if (!row.dateValue) {
          return false;
        }

        const diffDays = Math.abs((row.dateValue.getTime() - cutoffDate.getTime()) / 86400000);
        if (diffDays > cutoffDays) {
          return false;
        }
      }

      return true;
    })
    .map((row) => ({
      ...row,
      reason: getSamplingReason(row, task, threshold, cutoffDate, cutoffDays, keywords),
      selected: false,
    }));
}

function inferSamplingCutoffDate(rows) {
  const inferredDate = inferCutoffDateFromRows(rows);

  if (inferredDate) {
    return parseSamplingDate(inferredDate);
  }

  const uniqueYears = [
    ...new Set(
      rows
        .map((row) => row.dateValue?.getFullYear())
        .filter((year) => Number.isFinite(year))
        .sort((a, b) => a - b),
    ),
  ];

  if (!uniqueYears.length) {
    return null;
  }

  const baseYear = uniqueYears.length > 1 ? uniqueYears[uniqueYears.length - 2] : uniqueYears[0];
  return new Date(baseYear, 11, 31);
}

function formatDateInputValue(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isSamplingRowInTaskSubject(row, task) {
  if (task.subject === "现金" && row.sourceMaterialType === "现金日记账") {
    return true;
  }

  const text = normalizeSamplingText(
    [row.subjectCode, row.subjectName, row.counterpartyName, row.counterpartyAccount, row.summary].join(" "),
  );

  if (task.subject === "现金") {
    return text.includes("1001") || text.includes("库存现金") || text.includes("现金");
  }

  if (task.subject === "银行存款") {
    return text.includes("1002") || text.includes("银行存款");
  }

  if (task.subject === "其他货币资金") {
    return (
      text.includes("1012") ||
      text.includes("其他货币资金") ||
      text.includes("保证金") ||
      text.includes("银行汇票") ||
      text.includes("银行本票") ||
      text.includes("信用证") ||
      text.includes("信用卡") ||
      text.includes("存出投资款") ||
      text.includes("外埠存款")
    );
  }

  return true;
}

function normalizeSamplingText(value) {
  return String(value || "").replace(/\s/g, "");
}

function normalizeSamplingRow(row, task, index) {
  const year = String(row.year || "").trim();
  const month = String(row.month || "").trim();
  const day = String(row.day || "").trim();
  const dateText = [year, month, day].filter(Boolean).join("-");
  const debitAmount = parseDisplayMoney(row.debitAmount);
  const creditAmount = parseDisplayMoney(row.creditAmount);
  const amount = Math.max(Math.abs(debitAmount || 0), Math.abs(creditAmount || 0));
  const direction = debitAmount && !creditAmount ? "借方发生" : creditAmount && !debitAmount ? "贷方发生" : "借贷发生";
  const fallbackMonth = String(row.month || "").trim();
  const fallbackDay = String(row.day || "").trim();
  const dateValue = year && month && day ? new Date(Number(year), Number(month) - 1, Number(day)) : null;

  return {
    id: `${task.id}-${index}-${row.sourceFile || ""}-${row.voucherNo || ""}`,
    taskId: task.id,
    year,
    month,
    day,
    dateText: dateText || [fallbackMonth, fallbackDay].filter(Boolean).join("-"),
    dateValue,
    voucherNo: String(row.voucherNo || "").trim(),
    summary: String(row.summary || "").trim(),
    sourceMaterialType: String(row.sourceMaterialType || "").trim(),
    subjectCode: String(row.subjectCode || "").trim(),
    subjectName: String(row.subjectName || "").trim(),
    counterpartyCode: String(row.counterpartyCode || "").trim(),
    counterpartyName: String(row.counterpartyName || "").trim(),
    counterpartyAccount: String(row.counterpartyAccount || "").trim(),
    debitAmount: row.debitAmount || "",
    creditAmount: row.creditAmount || "",
    direction,
    amount,
    sourceFile: row.sourceFile || "",
    sourceMaterialType: row.sourceMaterialType || "",
  };
}

function getSamplingReason(row, task, threshold, cutoffDate, cutoffDays, keywords) {
  const reasons = [];

  if (threshold && row.amount >= threshold) {
    reasons.push(`金额超过阈值 ${formatSamplingAmount(threshold)}`);
  }

  if (task.type === "cutoff" && cutoffDate) {
    reasons.push(`位于截止日前后 ${cutoffDays} 天`);
  }

  if (keywords.length && keywords.some((keyword) => row.summary.includes(keyword))) {
    reasons.push("摘要命中关注关键词");
  }

  return reasons.join("；") || "符合当前抽凭参数";
}

function formatSamplingCounterparty(item) {
  const candidates = [item.counterpartyName, item.counterpartyAccount, item.subjectName].filter(Boolean);
  const name = candidates.find((value) => /[\u4e00-\u9fa5]/.test(String(value)));
  return name || "待补";
}

function parseSamplingKeywords(value) {
  return String(value || "")
    .split(/[、,，\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseSamplingDate(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return null;
  }

  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatSamplingAmount(amount) {
  return Number(amount || 0).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function getSamplingSourceFiles(task = null) {
  const sourceFiles = workpaperState.uploadedFiles.filter((file) =>
    ["序时账", "现金日记账"].includes(file.materialType),
  );

  if (!task || task.subject === "现金") {
    return sourceFiles;
  }

  return sourceFiles.filter((file) => file.materialType === "序时账");
}

function getActiveSamplingTask() {
  return (
    samplingTasks.find((task) => task.id === workpaperState.samplingActiveTaskId) ||
    samplingTasks[0]
  );
}

function getSamplingTaskState(taskId) {
  if (!workpaperState.samplingTasks[taskId]) {
    const task = samplingTasks.find((item) => item.id === taskId) || samplingTasks[0];
    workpaperState.samplingTasks[taskId] = {
      amountThreshold: String(task.defaultThreshold),
      cutoffDate: "",
      cutoffDays: String(task.defaultCutoffDays),
      keywords: "",
      candidates: [],
      confirmed: [],
      status: "未生成",
    };
  }

  return workpaperState.samplingTasks[taskId];
}

function openSamplingTask(taskId, options = {}) {
  workpaperState.samplingActiveTaskId = taskId;
  if (options.fromWorkpaper) {
    workpaperState.samplingReturnTargetId = taskId;
  }
  showPage("sampling-center", "抽凭中心");
  document.querySelector('[data-page="sampling-center"]')?.classList.add("active");
}

function renderFillableStatus() {
  if (!fillableWorkpaperList || !fillableCount) {
    return;
  }

  const activeTemplate = getActiveTemplate();
  const statuses = activeTemplate.workpapers.map((workpaper, index) => {
    const rule = getRuleForWorkpaper(workpaper);
    const materials = getBuilderMaterials(rule?.materials || workpaper.materials);
    const missing = materials.filter((material) => !workpaperState.providedMaterials.has(material));

    return {
      index,
      name: workpaper.name,
      missing,
      canTryAutoFill: missing.length === 0 && Boolean(rule?.autoFillFields?.length),
      hasRule: Boolean(rule),
    };
  });

  fillableCount.textContent = `${statuses.length} 张底稿`;
  fillableWorkpaperList.innerHTML = statuses
    .map(
      (status) => `
        <div class="fillable-item ${status.canTryAutoFill ? "ready" : ""}">
          <div>
            <strong>${status.name}</strong>
            <span>${getFillableStatusText(status)}</span>
          </div>
          <button class="secondary-action start-fill" data-workpaper-index="${status.index}" type="button">开始填制</button>
        </div>
      `,
    )
    .join("");

  fillableWorkpaperList.querySelectorAll(".start-fill").forEach((button) => {
    button.addEventListener("click", () => {
      openWorkpaperEditor(Number(button.dataset.workpaperIndex));
    });
  });
}

function openWorkpaperEditor(workpaperIndex) {
  workpaperState.editorWorkpaperIndex = workpaperIndex;
  workpaperState.selectedWorkpaperIndex = workpaperIndex;
  renderWorkpaperEditor();
  showPage("workpaper-editor", "底稿填制");
}

function openRelatedBankReconciliationWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isBankReconciliationWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    saveWorkpaperStatus.textContent = "当前模板未找到存款余额调节表底稿。";
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedBankLargeTransactionsWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isBankLargeTransactionsWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (saveWorkpaperStatus) {
      saveWorkpaperStatus.textContent = "当前模板未找到银行存款大额收支抽查表。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedBankCutoffWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isBankCutoffWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (saveWorkpaperStatus) {
      saveWorkpaperStatus.textContent = "当前模板未找到银行存款收支截止性测试。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedCashLargeTransactionsWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isCashLargeTransactionsWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (editorStatus) {
      editorStatus.textContent = "当前模板未找到现金大额收支抽查表。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedCashCutoffWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isCashCutoffWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (editorStatus) {
      editorStatus.textContent = "当前模板未找到现金收支截止性测试。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedCashCountWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isCashCountWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (editorStatus) {
      editorStatus.textContent = "当前模板未找到现金监盘记录及追溯表。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedBankDepositWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isBankDepositWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (saveBankReconciliationStatus) {
      saveBankReconciliationStatus.textContent = "当前模板未找到银行存款测试表底稿。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedOtherMonetaryLargeTransactionsWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isOtherMonetaryLargeTransactionsWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (saveOtherMonetaryStatus) {
      saveOtherMonetaryStatus.textContent = "当前模板未找到其他货币资金大额收支抽查表。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedOtherMonetaryCutoffWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isOtherMonetaryCutoffWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (saveOtherMonetaryStatus) {
      saveOtherMonetaryStatus.textContent = "当前模板未找到其他货币资金收支截止性测试。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function openRelatedOtherMonetaryWorkpaper() {
  const activeTemplate = getActiveTemplate();
  const workpaperIndex = activeTemplate.workpapers.findIndex((workpaper) =>
    isOtherMonetaryWorkpaper(workpaper, getRuleForWorkpaper(workpaper)),
  );

  if (workpaperIndex === -1) {
    if (otherMonetaryLargeTransactionsStatus) {
      otherMonetaryLargeTransactionsStatus.textContent = "当前模板未找到其他货币资金测试表。";
    }
    return;
  }

  openWorkpaperEditor(workpaperIndex);
}

function renderWorkpaperEditor() {
  const activeTemplate = getActiveTemplate();
  const selectedWorkpaper =
    activeTemplate.workpapers[workpaperState.editorWorkpaperIndex] ||
    activeTemplate.workpapers[0];
  const rule = getRuleForWorkpaper(selectedWorkpaper);
  const objective = rule?.objective || selectedWorkpaper.objective;
  const materials = getDisplayMaterials(rule?.materials || selectedWorkpaper.materials);
  const missing = materials.filter((material) => !workpaperState.providedMaterials.has(material));
  const autoFillFields = rule?.autoFillFields || ["暂未配置自动填字段，先保留人工填制。"];
  const manualJudgements =
    rule?.manualJudgements || ["该底稿暂未配置人工复核事项，需由审计人员结合底稿要求判断。"];

  editorWorkpaperTitle.textContent = selectedWorkpaper.name;
  editorWorkpaperObjective.textContent = objective;
  editorMaterials.innerHTML = materials.map((material) => `<li>${material}</li>`).join("");
  editorMissingMaterials.innerHTML = missing.length
    ? missing.map((material) => `<li>${material}</li>`).join("")
    : "<li>基础资料已勾选齐全，仍需人工复核资料来源和金额勾稽。</li>";
  editorAutoFields.innerHTML = autoFillFields.map((field) => `<li>${field}</li>`).join("");
  editorManualReview.innerHTML = manualJudgements.map((item) => `<li>${item}</li>`).join("");
  editorWorkAreaTitle.textContent = `${selectedWorkpaper.name}填制区`;
  editorStatus.textContent = missing.length
    ? `仍缺 ${missing.length} 项资料，可先填写已有信息`
    : "资料较完整，可尝试填制基础字段";

  if (cashCountEditor) {
    cashCountEditor.hidden = true;
  }
  if (cashLargeTransactionsEditor) {
    cashLargeTransactionsEditor.hidden = true;
  }
  if (cashCutoffEditor) {
    cashCutoffEditor.hidden = true;
  }

  if (isCashCountWorkpaper(selectedWorkpaper, rule)) {
    cashCountEditor.hidden = false;
    cashLargeTransactionsEditor.hidden = true;
    cashCutoffEditor.hidden = true;
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    renderCashSupportList();
    renderCashCountManualEditor();
  } else if (isCashLargeTransactionsWorkpaper(selectedWorkpaper, rule)) {
    cashCountEditor.hidden = true;
    cashLargeTransactionsEditor.hidden = false;
    cashCutoffEditor.hidden = true;
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    renderCashLargeTransactionRows();
  } else if (isCashCutoffWorkpaper(selectedWorkpaper, rule)) {
    cashCountEditor.hidden = true;
    cashLargeTransactionsEditor.hidden = true;
    cashCutoffEditor.hidden = false;
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    if (cashCutoffDateInput) {
      cashCutoffDateInput.value = getEffectiveCutoffDate(workpaperState.cashCutoffDate);
    }
    renderCashCutoffTransactionRows();
  } else if (isBankDepositWorkpaper(selectedWorkpaper, rule)) {
    bankDepositEditor.hidden = false;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    renderBankLocalUploadState();
    renderBankAccountRows();
  } else if (isBankReconciliationWorkpaper(selectedWorkpaper, rule)) {
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = false;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    renderBankReconciliationAccounts();
  } else if (isBankLargeTransactionsWorkpaper(selectedWorkpaper, rule)) {
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = false;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    renderBankLargeTransactionRows();
  } else if (isBankCutoffWorkpaper(selectedWorkpaper, rule)) {
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = false;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    if (bankCutoffDateInput) {
      bankCutoffDateInput.value = getEffectiveCutoffDate(workpaperState.bankCutoffDate);
    }
    renderBankCutoffTransactionRows();
  } else if (isOtherMonetaryWorkpaper(selectedWorkpaper, rule)) {
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = false;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    renderOtherMonetaryUploadState();
    renderOtherMonetarySupportList();
    renderOtherMonetaryRows();
  } else if (isOtherMonetaryLargeTransactionsWorkpaper(selectedWorkpaper, rule)) {
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = false;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = true;
    renderOtherMonetaryLargeTransactionRows();
  } else if (isOtherMonetaryCutoffWorkpaper(selectedWorkpaper, rule)) {
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = false;
    editorPlaceholder.hidden = true;
    if (otherMonetaryCutoffDateInput) {
      otherMonetaryCutoffDateInput.value = getEffectiveCutoffDate(workpaperState.otherMonetaryCutoffDate);
    }
    renderOtherMonetaryCutoffTransactionRows();
  } else {
    bankDepositEditor.hidden = true;
    bankReconciliationEditor.hidden = true;
    bankLargeTransactionsEditor.hidden = true;
    bankCutoffEditor.hidden = true;
    otherMonetaryEditor.hidden = true;
    otherMonetaryLargeTransactionsEditor.hidden = true;
    otherMonetaryCutoffEditor.hidden = true;
    editorPlaceholder.hidden = false;

    if (isMonetaryFundsSummaryWorkpaper(selectedWorkpaper, rule)) {
      editorWorkAreaTitle.textContent = "汇总说明";
      editorStatus.textContent = "由相关底稿汇总，需人工复核";
      editorPlaceholder.textContent =
        "本表不需要单独手动填写。请先完成现金监盘、银行存款测试表和其他货币资金测试表；导出货币资金底稿副本时，系统会汇总相关底稿数据，审定金额和勾稽关系仍需人工复核。";
    } else {
      editorPlaceholder.textContent =
        "这张底稿暂未开放结构化填制区。当前可以先查看左侧填制规则和资料缺口，后续会共用这个页面逐张补充自动填制能力。";
    }
  }
}

function renderBankReconciliationAccounts() {
  if (!bankReconciliationAccounts) {
    return;
  }

  const accounts = workpaperState.bankAccounts.filter(
    (account) => account.bankName || account.accountNo || account.endingBalance,
  );

  bankReconciliationAccounts.innerHTML = accounts.length
    ? accounts.map((account, index) => renderBankReconciliationCard(account, index)).join("")
    : `<div class="empty-gap">还没有银行账户数据。请先在底稿生成页上传科目余额表，生成银行账户行。</div>`;
}

function renderBankReconciliationCard(account, index) {
  const statementStatus = resolveStatementStatus(account);
  const reconciliationStatus = resolveReconciliationStatus(account);
  const statementBalance = account.statementBalance || "";
  const reconciliationBalance = account.reconciliationBalance || "";
  const bookBalance = account.reconciliationBookBalance || account.endingBalance || "";
  const bankStatementBalance = account.reconciliationStatementBalance || statementBalance || "";
  const adjustments = account.reconciliationAdjustments || {};

  return `
    <section class="bank-reconciliation-card">
      <div class="bank-reconciliation-card-header">
        <div>
          <p class="section-kicker">账户 ${index + 1}</p>
          <h4>${account.bankName || "未填写开户银行"}</h4>
          <span>${account.accountNo || "未填写账号"}</span>
        </div>
        <strong class="${reconciliationStatus === "yes" ? "status-ok" : reconciliationStatus === "no" ? "status-risk" : "status-pending"}">
          ${getReconciliationConclusionLabel(reconciliationStatus)}
        </strong>
      </div>

      <div class="reconciliation-summary-grid">
        <div>
          <span>开户银行</span>
          <strong>${account.bankName || "待填写"}</strong>
        </div>
        <div>
          <span>账号</span>
          <strong>${account.accountNo || "待填写"}</strong>
        </div>
        <div>
          <span>币种</span>
          <strong>${account.reconciliationCurrency || "人民币"}</strong>
        </div>
        <div>
          <span>企业银行存款日记账余额</span>
          <strong>${bookBalance || "待填写"}</strong>
        </div>
        <div>
          <span>银行对账单余额</span>
          <strong>${bankStatementBalance || (statementStatus === "yes" ? bookBalance : "缺少资料")}</strong>
        </div>
        <div>
          <span>调节后余额</span>
          <strong>${reconciliationStatus === "yes" || reconciliationStatus === "no" ? reconciliationBalance || "已识别但金额待复核" : "缺少资料"}</strong>
        </div>
      </div>

      <div class="reconciliation-adjustment-grid">
        <div>
          <span>加：银行已收企业尚未入账事项</span>
          <strong>${formatReconciliationAmount(adjustments.bankReceivedCompanyNot)}</strong>
        </div>
        <div>
          <span>减：银行已付企业尚未入账事项</span>
          <strong>${formatReconciliationAmount(adjustments.bankPaidCompanyNot)}</strong>
        </div>
        <div>
          <span>加：企业已收银行尚未入账事项</span>
          <strong>${formatReconciliationAmount(adjustments.companyReceivedBankNot)}</strong>
        </div>
        <div>
          <span>减：企业已付银行尚未入账事项</span>
          <strong>${formatReconciliationAmount(adjustments.companyPaidBankNot)}</strong>
        </div>
      </div>

      <p class="bank-row-hint">${getBankReconciliationHint(account)}</p>
    </section>
  `;
}

function renderBankAccountRows() {
  if (!bankAccountRows) {
    return;
  }

  bankAccountRows.innerHTML = workpaperState.bankAccounts
    .map(
      (account, index) => `
        <div class="bank-account-row">
          <input
            data-bank-field="bankName"
            data-row-index="${index}"
            value="${account.bankName}"
            placeholder="例如：中国银行北京分行"
          />
          <input
            data-bank-field="accountNo"
            data-row-index="${index}"
            value="${account.accountNo}"
            placeholder="请输入银行账号"
          />
          <input
            data-bank-field="endingBalance"
            data-row-index="${index}"
            value="${account.endingBalance}"
            placeholder="例如：125000.00"
          />
          <select data-bank-field="hasStatement" data-row-index="${index}">
            ${renderOptions(
              [
                ["auto", getStatementStatusLabel(account)],
                ["yes", "核对一致"],
                ["no", "核对不一致"],
              ],
              account.hasStatement || "auto",
            )}
          </select>
          <select data-bank-field="reconciliationStatus" data-row-index="${index}">
            ${renderOptions(
              [
                ["pending", getReconciliationStatusLabel(account)],
                ["yes", "相符"],
                ["no", "不相符"],
              ],
              account.reconciliationStatus || "pending",
            )}
          </select>
          <select data-bank-field="confirmationStatus" data-row-index="${index}">
            ${renderOptions(
              [
                ["should", "应函证"],
                ["sent", "已发函"],
                ["replied", "已回函"],
                ["notSent", "未发函"],
              ],
              account.confirmationStatus || "should",
            )}
          </select>
          <div class="adjustment-inputs">
            <input
              data-bank-field="adjustmentDebit"
              data-row-index="${index}"
              value="${account.adjustmentDebit || ""}"
              placeholder="借方"
            />
            <input
              data-bank-field="adjustmentCredit"
              data-row-index="${index}"
              value="${account.adjustmentCredit || ""}"
              placeholder="贷方"
            />
          </div>
          <div class="bank-recognition-details">${getBankRecognitionDetails(account)}</div>
          <span class="bank-row-hint">${getBankRowHint(account)}</span>
        </div>
      `,
    )
    .join("");

  bankAccountRows.querySelectorAll("input, select").forEach((fieldNode) => {
    const eventName = fieldNode.tagName === "SELECT" ? "change" : "input";
    fieldNode.addEventListener(eventName, () => {
      const rowIndex = Number(fieldNode.dataset.rowIndex);
      const field = fieldNode.dataset.bankField;
      workpaperState.bankAccounts[rowIndex][field] = fieldNode.value;

      if (fieldNode.tagName === "SELECT") {
        renderBankAccountRows();
      }
    });
  });
}

function renderOtherMonetaryRows() {
  if (!otherMonetaryRows) {
    return;
  }

  otherMonetaryRows.innerHTML = workpaperState.otherMonetaryItems.length
    ? workpaperState.otherMonetaryItems
        .map(
          (item, index) => `
            <div class="other-monetary-row">
              <input
                data-other-monetary-field="projectName"
                data-row-index="${index}"
                value="${escapeHtml(item.projectName)}"
                placeholder="例如：银行承兑汇票保证金"
              />
              <input
                data-other-monetary-field="bankName"
                data-row-index="${index}"
                value="${escapeHtml(item.bankName || "")}"
                placeholder="例如：QQ银行"
              />
              <input
                data-other-monetary-field="accountNo"
                data-row-index="${index}"
                value="${escapeHtml(item.accountNo || "")}"
                placeholder="请输入账号"
              />
              <input
                data-other-monetary-field="endingBalance"
                data-row-index="${index}"
                value="${escapeHtml(item.endingBalance)}"
                placeholder="例如：50000.00"
              />
              <select data-other-monetary-field="hasStatement" data-row-index="${index}">
                ${renderOptions(
                  [
                    ["auto", getOtherMonetaryStatementStatusLabel(item)],
                    ["yes", "核对一致"],
                    ["no", "核对不一致"],
                  ],
                  item.hasStatement || "auto",
                )}
              </select>
              <select data-other-monetary-field="reconciliationStatus" data-row-index="${index}">
                ${renderOptions(
                  [
                    ["pending", getOtherMonetaryReconciliationStatusLabel(item)],
                    ["yes", "相符"],
                    ["no", "不相符"],
                  ],
                  item.reconciliationStatus || "pending",
                )}
              </select>
              <div class="adjustment-inputs">
                <input
                  data-other-monetary-field="adjustmentDebit"
                  data-row-index="${index}"
                  value="${escapeHtml(item.adjustmentDebit || "")}"
                  placeholder="借方"
                />
                <input
                  data-other-monetary-field="adjustmentCredit"
                  data-row-index="${index}"
                  value="${escapeHtml(item.adjustmentCredit || "")}"
                  placeholder="贷方"
                />
              </div>
              <input
                data-other-monetary-field="riskNote"
                data-row-index="${index}"
                value="${escapeHtml(item.riskNote || "")}"
                placeholder="风险提示 / 人工复核说明"
              />
              <span class="bank-row-hint">${getOtherMonetaryRowHint(item)}</span>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-gap">还没有其他货币资金项目。请先在底稿生成页上传科目余额表，或点击“新增项目行”手动录入。</div>`;

  otherMonetaryRows.querySelectorAll("input, select").forEach((fieldNode) => {
    const eventName = fieldNode.tagName === "SELECT" ? "change" : "input";
    fieldNode.addEventListener(eventName, () => {
      const rowIndex = Number(fieldNode.dataset.rowIndex);
      const field = fieldNode.dataset.otherMonetaryField;
      workpaperState.otherMonetaryItems[rowIndex][field] = fieldNode.value;

      if (fieldNode.tagName === "SELECT") {
        renderOtherMonetaryRows();
      }
    });
  });
}

function renderOtherMonetaryLargeTransactionRows() {
  renderLargeTransactionRows(
    otherMonetaryLargeTransactionRows,
    workpaperState.otherMonetaryLargeTransactions,
    "otherMonetaryLargeTransactionPage",
  );
}

function renderCashLargeTransactionRows() {
  renderLargeTransactionRows(
    cashLargeTransactionRows,
    workpaperState.cashLargeTransactions,
    "cashLargeTransactionPage",
  );
}

function renderCashCutoffTransactionRows() {
  renderCutoffTransactionRows(
    cashCutoffTransactionRows,
    workpaperState.cashCutoffTransactions,
    "cashCutoffTransactionPage",
  );
}

function renderOtherMonetaryCutoffTransactionRows() {
  renderCutoffTransactionRows(
    otherMonetaryCutoffTransactionRows,
    workpaperState.otherMonetaryCutoffTransactions,
    "otherMonetaryCutoffTransactionPage",
  );
}

function renderBankLargeTransactionRows() {
  renderLargeTransactionRows(
    bankLargeTransactionRows,
    workpaperState.bankLargeTransactions,
    "bankLargeTransactionPage",
  );
}

function renderBankCutoffTransactionRows() {
  renderCutoffTransactionRows(
    bankCutoffTransactionRows,
    workpaperState.bankCutoffTransactions,
    "bankCutoffTransactionPage",
  );
}

function renderLargeTransactionRows(containerNode, rows, pageStateKey) {
  if (!containerNode) {
    return;
  }

  const totalPages = Math.max(Math.ceil(rows.length / largeTransactionsPerPage), 1);
  const currentPage = clampLargeTransactionPage(workpaperState[pageStateKey] || 0, rows);
  const startIndex = currentPage * largeTransactionsPerPage;
  const visibleRows = rows.slice(startIndex, startIndex + largeTransactionsPerPage);
  workpaperState[pageStateKey] = currentPage;

  containerNode.innerHTML = rows.length
    ? `
        <div class="large-transaction-pagination">
          <span>共 ${rows.length} 条，每页 ${largeTransactionsPerPage} 条；第 ${currentPage + 1} / ${totalPages} 页</span>
          <div>
            <button class="secondary-action large-page-button" data-large-page-action="prev" type="button" ${currentPage === 0 ? "disabled" : ""}>上一页</button>
            <button class="secondary-action large-page-button" data-large-page-action="next" type="button" ${currentPage >= totalPages - 1 ? "disabled" : ""}>下一页</button>
          </div>
        </div>
        ${visibleRows
        .map(
          (row, index) => `
            <div class="large-transaction-row">
              <input data-large-transaction-field="month" data-row-index="${startIndex + index}" value="${escapeHtml(row.month || "")}" placeholder="月" />
              <input data-large-transaction-field="day" data-row-index="${startIndex + index}" value="${escapeHtml(row.day || "")}" placeholder="日" />
              <input data-large-transaction-field="voucherNo" data-row-index="${startIndex + index}" value="${escapeHtml(row.voucherNo || "")}" placeholder="凭证号" />
              <input data-large-transaction-field="summary" data-row-index="${startIndex + index}" value="${escapeHtml(row.summary || "")}" placeholder="摘要" />
              <input data-large-transaction-field="counterpartyAccount" data-row-index="${startIndex + index}" value="${escapeHtml(row.counterpartyAccount || "")}" placeholder="对方科目" />
              <input data-large-transaction-field="debitAmount" data-row-index="${startIndex + index}" value="${escapeHtml(row.debitAmount || "")}" placeholder="借方金额" />
              <input data-large-transaction-field="creditAmount" data-row-index="${startIndex + index}" value="${escapeHtml(row.creditAmount || "")}" placeholder="贷方金额" />
            </div>
          `,
        )
        .join("")}
      `
    : `<div class="empty-gap">还没有大额收支抽查记录。请先上传大额收付检查表，然后点击“从已上传资料生成”。</div>`;

  containerNode.querySelectorAll("[data-large-page-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.largePageAction === "next" ? 1 : -1;
      workpaperState[pageStateKey] = clampLargeTransactionPage(currentPage + direction, rows);
      renderLargeTransactionRows(containerNode, rows, pageStateKey);
    });
  });

  containerNode.querySelectorAll("input").forEach((fieldNode) => {
    fieldNode.addEventListener("input", () => {
      const rowIndex = Number(fieldNode.dataset.rowIndex);
      const field = fieldNode.dataset.largeTransactionField;
      rows[rowIndex][field] = fieldNode.value;
    });
  });
}

function renderCutoffTransactionRows(containerNode, rows, pageStateKey) {
  if (!containerNode) {
    return;
  }

  const totalPages = Math.max(Math.ceil(rows.length / largeTransactionsPerPage), 1);
  const currentPage = clampLargeTransactionPage(workpaperState[pageStateKey] || 0, rows);
  const startIndex = currentPage * largeTransactionsPerPage;
  const visibleRows = rows.slice(startIndex, startIndex + largeTransactionsPerPage);
  workpaperState[pageStateKey] = currentPage;

  containerNode.innerHTML = rows.length
    ? `
        <div class="large-transaction-pagination">
          <span>共 ${rows.length} 条，每页 ${largeTransactionsPerPage} 条；第 ${currentPage + 1} / ${totalPages} 页</span>
          <div>
            <button class="secondary-action large-page-button" data-cutoff-page-action="prev" type="button" ${currentPage === 0 ? "disabled" : ""}>上一页</button>
            <button class="secondary-action large-page-button" data-cutoff-page-action="next" type="button" ${currentPage >= totalPages - 1 ? "disabled" : ""}>下一页</button>
          </div>
        </div>
        ${visibleRows
        .map(
          (row, index) => `
            <div class="cutoff-transaction-row">
              <input data-cutoff-transaction-field="year" data-row-index="${startIndex + index}" value="${escapeHtml(row.year || "")}" placeholder="年" />
              <input data-cutoff-transaction-field="month" data-row-index="${startIndex + index}" value="${escapeHtml(row.month || "")}" placeholder="月" />
              <input data-cutoff-transaction-field="day" data-row-index="${startIndex + index}" value="${escapeHtml(row.day || "")}" placeholder="日" />
              <input data-cutoff-transaction-field="voucherNo" data-row-index="${startIndex + index}" value="${escapeHtml(row.voucherNo || "")}" placeholder="凭证号" />
              <input data-cutoff-transaction-field="summary" data-row-index="${startIndex + index}" value="${escapeHtml(row.summary || "")}" placeholder="摘要" />
              <input data-cutoff-transaction-field="debitAmount" data-row-index="${startIndex + index}" value="${escapeHtml(row.debitAmount || "")}" placeholder="借方金额" />
              <input data-cutoff-transaction-field="creditAmount" data-row-index="${startIndex + index}" value="${escapeHtml(row.creditAmount || "")}" placeholder="贷方金额" />
            </div>
          `,
        )
        .join("")}
      `
    : `<div class="empty-gap">还没有截止测试记录。请先上传截止测试资料，然后点击“从已上传资料生成”。</div>`;

  containerNode.querySelectorAll("[data-cutoff-page-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.cutoffPageAction === "next" ? 1 : -1;
      workpaperState[pageStateKey] = clampLargeTransactionPage(currentPage + direction, rows);
      renderCutoffTransactionRows(containerNode, rows, pageStateKey);
    });
  });

  containerNode.querySelectorAll("input").forEach((fieldNode) => {
    fieldNode.addEventListener("input", () => {
      const rowIndex = Number(fieldNode.dataset.rowIndex);
      const field = fieldNode.dataset.cutoffTransactionField;
      rows[rowIndex][field] = fieldNode.value;
    });
  });
}

function clampLargeTransactionPage(page, rows) {
  const totalPages = Math.max(Math.ceil(rows.length / largeTransactionsPerPage), 1);

  return Math.min(Math.max(page, 0), totalPages - 1);
}

function getLastLargeTransactionPage(rows) {
  return Math.max(Math.ceil(rows.length / largeTransactionsPerPage) - 1, 0);
}

async function saveBankWorkpaperDraft(
  triggerButton = saveBankWorkpaperButton,
  statusNode = saveWorkpaperStatus,
) {
  const accounts = workpaperState.bankAccounts
    .map((account) => ({
      bankName: account.bankName.trim(),
      accountNo: account.accountNo.trim(),
      endingBalance: account.endingBalance.trim(),
      hasStatement: resolveStatementStatus(account),
      reconciliationStatus: resolveReconciliationStatus(account),
      confirmationStatus: account.confirmationStatus || "should",
      adjustmentDebit: (account.adjustmentDebit || "").trim(),
      adjustmentCredit: (account.adjustmentCredit || "").trim(),
    }))
    .filter(
      (account) =>
        account.bankName ||
        account.accountNo ||
        account.endingBalance ||
        account.adjustmentDebit ||
        account.adjustmentCredit,
    );
  const reconciliations = getBankReconciliationExportRows();
  const otherMonetaryItems = getOtherMonetaryExportRows();
  const cashLargeTransactions = getCashLargeTransactionExportRows();
  const bankLargeTransactions = getBankLargeTransactionExportRows();
  const otherMonetaryLargeTransactions = getOtherMonetaryLargeTransactionExportRows();
  const cashCutoffTransactions = getCashCutoffTransactionExportRows();
  const bankCutoffTransactions = getBankCutoffTransactionExportRows();
  const otherMonetaryCutoffTransactions = getOtherMonetaryCutoffTransactionExportRows();
  const cashCountData = getCashCountExportData();

  if (
    !accounts.length &&
    !otherMonetaryItems.length &&
    !cashCountData &&
    !cashLargeTransactions.length &&
    !bankLargeTransactions.length &&
    !otherMonetaryLargeTransactions.length &&
    !cashCutoffTransactions.length &&
    !bankCutoffTransactions.length &&
    !otherMonetaryCutoffTransactions.length
  ) {
    if (statusNode) {
      statusNode.textContent = "请至少填写一行银行账户、其他货币资金项目、大额收支或截止测试记录后再导出货币资金底稿。";
    }
    return;
  }

  if (!triggerButton || !statusNode) {
    return;
  }

  if (isOnlineDemo) {
    statusNode.textContent = getOnlineDemoMessage();
    return;
  }

  triggerButton.disabled = true;
  statusNode.textContent = "正在生成货币资金底稿副本...";

  try {
    const response = await fetch("/api/save-bank-workpaper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        templateId: workpaperState.templateId,
        accounts,
        reconciliations,
        otherMonetaryItems,
        cashCountData,
        cashLargeTransactions,
        bankLargeTransactions,
        otherMonetaryLargeTransactions,
        cashCutoffTransactions,
        bankCutoffTransactions,
        otherMonetaryCutoffTransactions,
        auditYear: workpaperState.auditYear,
        auditCutoffDate: workpaperState.auditCutoffDate,
        cashCutoffDate: getEffectiveCutoffDate(workpaperState.cashCutoffDate),
        bankCutoffDate: getEffectiveCutoffDate(workpaperState.bankCutoffDate),
        otherMonetaryCutoffDate: getEffectiveCutoffDate(workpaperState.otherMonetaryCutoffDate),
      }),
    });
    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      throw new Error("保存接口没有返回 JSON。请确认页面是通过 http://localhost:4173/ 打开的，并刷新页面后重试。");
    }

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "保存失败");
    }

    statusNode.innerHTML = `已生成：<a href="${result.output}" download>${result.output}</a>`;
  } catch (error) {
    statusNode.textContent = error.message || "保存失败，请稍后再试。";
  } finally {
    triggerButton.disabled = false;
  }
}

function getOtherMonetaryExportRows() {
  return workpaperState.otherMonetaryItems
    .map((item) => ({
      projectName: (item.projectName || "").trim(),
      bankName: (item.bankName || "").trim(),
      accountNo: (item.accountNo || "").trim(),
      accountDescription: (item.accountDescription || "").trim(),
      endingBalance: (item.endingBalance || "").trim(),
      hasStatement: resolveOtherMonetaryStatementStatus(item),
      reconciliationStatus: resolveOtherMonetaryReconciliationStatus(item),
      adjustmentDebit: (item.adjustmentDebit || "").trim(),
      adjustmentCredit: (item.adjustmentCredit || "").trim(),
      riskNote: (item.riskNote || "").trim(),
    }))
    .filter(
      (item) =>
        item.projectName ||
        item.bankName ||
        item.accountNo ||
        item.accountDescription ||
        item.endingBalance ||
        item.adjustmentDebit ||
        item.adjustmentCredit ||
        item.riskNote,
    );
}

function getOtherMonetaryLargeTransactionExportRows() {
  return getLargeTransactionExportRows(workpaperState.otherMonetaryLargeTransactions);
}

function getCashLargeTransactionExportRows() {
  return getLargeTransactionExportRows(workpaperState.cashLargeTransactions);
}

function getBankLargeTransactionExportRows() {
  return getLargeTransactionExportRows(workpaperState.bankLargeTransactions);
}

function getOtherMonetaryCutoffTransactionExportRows() {
  return getCutoffTransactionExportRows(workpaperState.otherMonetaryCutoffTransactions);
}

function getCashCutoffTransactionExportRows() {
  return getCutoffTransactionExportRows(workpaperState.cashCutoffTransactions);
}

function getBankCutoffTransactionExportRows() {
  return getCutoffTransactionExportRows(workpaperState.bankCutoffTransactions);
}

function getCutoffTransactionExportRows(rows) {
  return rows
    .map((row) => ({
      year: (row.year || "").trim(),
      month: (row.month || "").trim(),
      day: (row.day || "").trim(),
      voucherNo: (row.voucherNo || "").trim(),
      summary: (row.summary || "").trim(),
      debitAmount: (row.debitAmount || "").trim(),
      creditAmount: (row.creditAmount || "").trim(),
    }))
    .filter(
      (row) =>
        row.year ||
        row.month ||
        row.day ||
        row.voucherNo ||
        row.summary ||
        row.debitAmount ||
        row.creditAmount,
    );
}

function getLargeTransactionExportRows(rows) {
  return rows
    .map((row) => ({
      month: (row.month || "").trim(),
      day: (row.day || "").trim(),
      voucherNo: (row.voucherNo || "").trim(),
      summary: (row.summary || "").trim(),
      counterpartyAccount: (row.counterpartyAccount || "").trim(),
      debitAmount: (row.debitAmount || "").trim(),
      creditAmount: (row.creditAmount || "").trim(),
    }))
    .filter(
      (row) =>
        row.month ||
        row.day ||
        row.voucherNo ||
        row.summary ||
        row.counterpartyAccount ||
        row.debitAmount ||
        row.creditAmount,
    );
}

function getOtherMonetaryStatementStatusLabel(item = {}) {
  if (item.statementMatch === "matched") {
    return "核对一致";
  }

  if (item.statementMatch === "mismatch") {
    return "核对不一致";
  }

  return "缺少资料";
}

function getOtherMonetaryReconciliationStatusLabel(item = {}) {
  if (item.reconciliationMatch === "matched") {
    return "相符";
  }

  if (item.reconciliationMatch === "mismatch") {
    return "不相符";
  }

  return "缺少资料";
}

function resolveOtherMonetaryStatementStatus(item = {}) {
  if ((item.hasStatement || "auto") === "auto") {
    if (item.statementMatch === "matched") {
      return "yes";
    }

    if (item.statementMatch === "mismatch") {
      return "no";
    }

    return "auto";
  }

  return item.hasStatement;
}

function resolveOtherMonetaryReconciliationStatus(item = {}) {
  if ((item.reconciliationStatus || "pending") === "pending") {
    if (item.reconciliationMatch === "matched") {
      return "yes";
    }

    if (item.reconciliationMatch === "mismatch") {
      return "no";
    }

    return "pending";
  }

  return item.reconciliationStatus;
}

function createEmptyOtherMonetaryItem() {
  return {
    projectName: "",
    bankName: "",
    accountNo: "",
    accountDescription: "",
    endingBalance: "",
    hasStatement: "auto",
    reconciliationStatus: "pending",
    adjustmentDebit: "",
    adjustmentCredit: "",
    riskNote: otherMonetaryGeneralReviewNote,
  };
}

function createEmptyLargeTransactionRow() {
  return {
    month: "",
    day: "",
    voucherNo: "",
    summary: "",
    counterpartyAccount: "",
    debitAmount: "",
    creditAmount: "",
  };
}

function createEmptyCutoffTransactionRow() {
  return {
    year: "",
    month: "",
    day: "",
    voucherNo: "",
    summary: "",
    debitAmount: "",
    creditAmount: "",
  };
}

function getOtherMonetaryReviewNote(item = {}) {
  return otherMonetaryGeneralReviewNote;
}

function getOtherMonetarySpecificReviewNote(item = {}) {
  const text = `${item.projectName || ""} ${item.accountDescription || ""}`;
  const matchedKey = Object.keys(otherMonetaryReviewNotes).find((key) => text.includes(key));

  return matchedKey ? otherMonetaryReviewNotes[matchedKey] : "需复核外部资料、资金用途、未达项及期后清理。";
}

function renderOptions(options, selectedValue) {
  return options
    .map(
      ([value, label]) => `
        <option value="${value}" ${value === selectedValue ? "selected" : ""}>${label}</option>
      `,
    )
    .join("");
}

function getStatementStatusLabel(account = {}) {
  if (account.statementMatch === "matched") {
    return "核对一致";
  }

  if (account.statementMatch === "mismatch") {
    return "核对不一致";
  }

  return "缺少资料";
}

function getReconciliationStatusLabel(account = {}) {
  if (account.reconciliationMatch === "matched") {
    return "相符";
  }

  if (account.reconciliationMatch === "mismatch") {
    return "不相符";
  }

  return "缺少资料";
}

function resolveStatementStatus(account) {
  if ((account.hasStatement || "auto") === "auto") {
    if (account.statementMatch === "matched") {
      return "yes";
    }

    if (account.statementMatch === "mismatch") {
      return "no";
    }

    return "auto";
  }

  return account.hasStatement;
}

function resolveReconciliationStatus(account) {
  if ((account.reconciliationStatus || "pending") === "pending") {
    if (account.reconciliationMatch === "matched") {
      return "yes";
    }

    if (account.reconciliationMatch === "mismatch") {
      return "no";
    }

    return "pending";
  }

  return account.reconciliationStatus;
}

function getBankRecognitionDetails(account = {}) {
  const details = [];

  if (account.statementMatch) {
    details.push(
      `对账单：${getRecognitionResultText(account.statementMatch)}${formatRecognitionMeta({
        accountNo: account.statementAccountNo,
        balance: account.statementBalance,
        sourceFile: account.statementSourceFile,
        isOcr: account.statementSourceType === "image-ocr",
      })}`,
    );
  }

  if (account.reconciliationMatch) {
    details.push(
      `调节表：${getRecognitionResultText(account.reconciliationMatch)}${formatRecognitionMeta({
        accountNo: account.reconciliationAccountNo,
        balance: account.reconciliationBalance,
        sourceFile: account.reconciliationSourceFile,
      })}`,
    );
  }

  return details.length
    ? details.map((detail) => `<span>${escapeHtml(detail)}</span>`).join("")
    : "<span>识别详情：等待上传并匹配外部资料。</span>";
}

function getRecognitionResultText(matchStatus) {
  if (matchStatus === "matched") {
    return "金额匹配";
  }

  if (matchStatus === "mismatch") {
    return "账号匹配但金额不一致";
  }

  return "未匹配到该账号";
}

function formatRecognitionMeta({ accountNo, balance, sourceFile, isOcr = false }) {
  const meta = [];

  if (accountNo) {
    meta.push(`账号 ${accountNo}`);
  }

  if (balance) {
    meta.push(`匹配金额 ${balance}`);
  }

  if (sourceFile) {
    meta.push(`来源 ${sourceFile}`);
  }

  if (isOcr) {
    meta.push("OCR识别");
  }

  return meta.length ? `（${meta.join("，")}）` : "";
}

function getReconciliationConclusionLabel(status) {
  if (status === "yes") {
    return "相符";
  }

  if (status === "no") {
    return "不相符";
  }

  return "缺少资料";
}

function getBankReconciliationHint(account) {
  const hints = [];
  const statementStatus = resolveStatementStatus(account);
  const reconciliationStatus = resolveReconciliationStatus(account);

  if (statementStatus === "auto") {
    hints.push("缺银行对账单，暂不能复核银行对账单余额。");
  }

  if (reconciliationStatus === "pending") {
    hints.push("缺银行存款余额调节表，暂不能判断调节后余额是否相符。");
  }

  if (reconciliationStatus === "no") {
    hints.push(
      account.reconciliationBalance
        ? `调节后余额 ${account.reconciliationBalance} 与账面余额 ${account.endingBalance || "未填写"} 不一致，需人工核查未达账项。`
        : "余额调节表已匹配账号，但金额未能与账面余额一致，需人工复核。",
    );
  }

  if (reconciliationStatus === "yes") {
    hints.push("调节后余额与账面余额相符；未达账项明细仍需审计人员复核性质和期后清理。");
  }

  return hints.join(" ") || "资料状态较完整，仍需人工复核未达账项明细。";
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getBankRowHint(account) {
  const hints = [];
  const statementStatus = resolveStatementStatus(account);
  const reconciliationStatus = resolveReconciliationStatus(account);

  if (statementStatus === "auto") {
    hints.push("缺银行对账单，或已上传但未匹配到该账号和金额");
  }

  if (statementStatus === "no") {
    hints.push(
      account.statementMatch === "mismatch"
        ? `对账单余额 ${account.statementBalance} 与期末未审数不一致，需人工核查`
        : "已手动标记为核对不一致，需补充差异说明",
    );
  }

  if (account.statementMatch === "matched") {
    hints.push("对账单余额与期末未审数一致");
  }

  if (reconciliationStatus === "pending") {
    hints.push(
      account.reconciliationMatch === "missing"
        ? "余额调节表未匹配到该账号，需人工确认"
        : workpaperState.providedMaterials.has("银行存款余额调节表")
          ? "调节相符需人工确认"
        : "缺余额调节表，暂不能判断调节是否相符",
    );
  }

  if (reconciliationStatus === "no") {
    hints.push(
      account.reconciliationBalance
        ? `调节表余额 ${account.reconciliationBalance} 与期末未审数不一致`
        : "调节表未匹配到该账号",
    );
  }

  if (reconciliationStatus === "yes") {
    hints.push("余额调节表金额相符");
  }

  if ((account.confirmationStatus || "should") === "should") {
    hints.push("所有银行账户默认应函证");
  }

  if (account.adjustmentDebit || account.adjustmentCredit) {
    hints.push("已填写审计调整，请复核调整依据");
  }

  return hints.length ? hints.join("；") : "资料状态较完整，仍需人工复核。";
}

function getOtherMonetaryRowHint(item = {}) {
  const hints = [];
  const statementStatus = resolveOtherMonetaryStatementStatus(item);
  const reconciliationStatus = resolveOtherMonetaryReconciliationStatus(item);

  if (statementStatus === "yes") {
    hints.push(
      item.statementSourceFile
        ? `对账单金额匹配，来源：${item.statementSourceFile}`
        : "对账单金额匹配",
    );
  }

  if (statementStatus === "no") {
    hints.push(
      item.statementBalance
        ? `对账单余额 ${item.statementBalance} 与期末未审数不一致，需人工核查`
        : "对账单已标记不一致，需补充差异说明",
    );
  }

  if (reconciliationStatus === "yes") {
    hints.push(
      item.reconciliationSourceFile
        ? `调节表金额相符，来源：${item.reconciliationSourceFile}`
        : "调节表金额相符",
    );
  }

  if (reconciliationStatus === "no") {
    hints.push(
      item.reconciliationBalance
        ? `调节表余额 ${item.reconciliationBalance} 与期末未审数不一致，需人工核查`
        : "调节表已标记不相符，需人工核查差异",
    );
  }

  if (item.adjustmentDebit || item.adjustmentCredit) {
    hints.push("已填写审计调整，请复核调整依据");
  }

  hints.push(getOtherMonetarySpecificReviewNote(item));

  return hints.join("；") || getOtherMonetarySpecificReviewNote(item);
}

function getMissingMaterials() {
  const activeTemplate = getActiveTemplate();
  const materialMap = new Map();

  activeTemplate.workpapers.forEach((workpaper) => {
    const rule = getRuleForWorkpaper(workpaper);
    const materials = getBuilderMaterials(rule?.materials || workpaper.materials);

    materials.forEach((material) => {
      if (workpaperState.providedMaterials.has(material)) {
        return;
      }

      if (!materialMap.has(material)) {
        materialMap.set(material, []);
      }
      materialMap.get(material).push(workpaper.name);
    });
  });

  return Array.from(materialMap, ([material, workpapers]) => ({
    material,
    workpapers,
  }));
}

function getActiveTemplate() {
  return (
    cashWorkpaperTemplates.find((template) => template.id === workpaperState.templateId) ||
    cashWorkpaperTemplates[0]
  );
}

function getRuleForWorkpaper(workpaper) {
  return cashRuleConfig.find((rule) =>
    rule.aliases?.some((alias) => workpaper.name.includes(alias) || alias.includes(workpaper.name)),
  );
}

function getMaterialOptions() {
  return [...cashMaterialOptions];
}

function getDisplayMaterials(materials) {
  const materialSet = new Set();

  materials.forEach((material) => {
    normalizeMaterial(material).forEach((item) => materialSet.add(item));
  });

  return Array.from(materialSet);
}

function getBuilderMaterials(materials) {
  const materialSet = new Set();

  materials.forEach((material) => {
    normalizeBuilderMaterial(material).forEach((item) => materialSet.add(item));
  });

  return Array.from(materialSet);
}

function normalizeMaterial(material) {
  if (cashMaterialOptions.includes(material)) {
    return [material];
  }

  return materialAliasMap[material] || [material];
}

function normalizeBuilderMaterial(material) {
  if (cashMaterialOptions.includes(material)) {
    return [material];
  }

  const aliases = materialAliasMap[material] || [material];
  const genericMaterials = aliases
    .map((item) => (cashMaterialOptions.includes(item) ? item : mapToGenericMaterial(item)))
    .filter(Boolean);

  return genericMaterials.length ? Array.from(new Set(genericMaterials)) : ["其他资料"];
}

function mapToGenericMaterial(material) {
  if (["科目余额表", "总账", "明细账", "序时账", "现金日记账"].includes(material)) {
    return material;
  }

  if (
    String(material || "").includes("总账") ||
    String(material || "").includes("明细账") ||
    String(material || "").includes("序时账") ||
    String(material || "").includes("日记账")
  ) {
    if (String(material).includes("现金")) {
      return "现金日记账";
    }

    return "序时账";
  }

  return "其他资料";
}

function detectMaterialType(fileName) {
  const normalizedName = fileName.toLowerCase();
  const matchedRule = materialDetectionRules.find((rule) =>
    rule.keywords.some((keyword) => normalizedName.includes(keyword.toLowerCase())),
  );

  if (!matchedRule?.material) {
    return "";
  }

  return cashMaterialOptions.includes(matchedRule.material)
    ? matchedRule.material
    : mapToGenericMaterial(matchedRule.material);
}

function getFillableStatusText(status) {
  if (status.canTryAutoFill) {
    return "资料较完整，可尝试填基础字段，仍需人工复核。";
  }

  if (!status.hasRule) {
    return "暂未匹配详细配置规则，进入后先查看人工填制说明。";
  }

  const preview = status.missing.slice(0, 3).join("、");
  const moreText = status.missing.length > 3 ? `等 ${status.missing.length} 项资料` : "";

  return `资料不完整，仍可进入填制页；当前缺少：${preview}${moreText}。`;
}

function isCashCountWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("现金监盘记录及追溯表") ||
    name.includes("库存现金监盘") ||
    name.includes("监盘计划及小结") ||
    ruleAliases.some(
      (alias) =>
        alias.includes("现金监盘记录及追溯表") ||
        alias.includes("库存现金监盘") ||
        alias.includes("监盘计划及小结"),
    )
  );
}

function isMonetaryFundsSummaryWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];
  const candidates = [name, ...ruleAliases];

  return candidates.some(
    (item) =>
      item.includes("货币资金审定表") ||
      item.includes("G1000-0现金审定表") ||
      item.includes("现金明细表"),
  );
}

function isCashLargeTransactionsWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("现金大额收支抽查表") ||
    name.includes("大额库存现金收支检查表") ||
    name.includes("现金抽凭") ||
    ruleAliases.some(
      (alias) =>
        alias.includes("现金大额收支抽查表") ||
        alias.includes("大额库存现金收支检查表") ||
        alias.includes("现金抽凭"),
    )
  );
}

function isCashCutoffWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("现金收支截止") ||
    name.includes("现金截止") ||
    ruleAliases.some((alias) => alias.includes("现金收支截止") || alias.includes("现金截止"))
  );
}

function isBankDepositWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("银行存款测试表") ||
    name.includes("银行存款明细表") ||
    ruleAliases.some((alias) => alias.includes("银行存款明细表") || alias.includes("银行存款测试表"))
  );
}

function isBankReconciliationWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("存款余额调节表") ||
    name.includes("银行存款余额调节表") ||
    ruleAliases.some((alias) => alias.includes("存款余额调节表"))
  );
}

function isBankLargeTransactionsWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("银行存款大额收支抽查表") ||
    name.includes("银行存款大额收付检查表") ||
    ruleAliases.some(
      (alias) =>
        alias.includes("银行存款大额收支抽查表") ||
        alias.includes("银行存款大额收付检查表"),
    )
  );
}

function isBankCutoffWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("银行存款收支截止") ||
    name.includes("银行存款截止") ||
    ruleAliases.some(
      (alias) => alias.includes("银行存款收支截止") || alias.includes("银行存款截止"),
    )
  );
}

function isOtherMonetaryWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("其他货币资金测试表") ||
    name.includes("其他货币资金明细表") ||
    ruleAliases.some((alias) => alias.includes("其他货币资金测试表") || alias.includes("其他货币资金明细表"))
  );
}

function isOtherMonetaryLargeTransactionsWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("其他货币资金大额收支抽查表") ||
    name.includes("其他货币资金大额收付检查表") ||
    ruleAliases.some(
      (alias) =>
        alias.includes("其他货币资金大额收支抽查表") ||
        alias.includes("其他货币资金大额收付检查表"),
    )
  );
}

function isOtherMonetaryCutoffWorkpaper(workpaper, rule) {
  const name = workpaper.name;
  const ruleAliases = rule?.aliases || [];

  return (
    name.includes("其他货币资金收支截止") ||
    name.includes("其他货币资金截止") ||
    ruleAliases.some(
      (alias) => alias.includes("其他货币资金收支截止") || alias.includes("其他货币资金截止"),
    )
  );
}

function formatFileSize(size) {
  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

async function exportWorkpaperCopy() {
  const activeTemplate = getActiveTemplate();

  if (!exportStatus || !exportWorkpaperCopyButton) {
    return;
  }

  if (isOnlineDemo) {
    exportStatus.textContent = getOnlineDemoMessage();
    return;
  }

  exportWorkpaperCopyButton.disabled = true;
  exportStatus.textContent = "正在生成 Excel 底稿副本...";

  try {
    const response = await fetch("/api/export-workpaper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        templateId: activeTemplate.id,
      }),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "生成失败");
    }

    exportStatus.textContent = `已生成：${result.output}`;
  } catch (error) {
    exportStatus.textContent =
      "未能生成副本。请用 node server.js 启动本地服务后再试。";
  } finally {
    exportWorkpaperCopyButton.disabled = false;
  }
}
