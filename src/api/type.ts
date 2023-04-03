// 表单
export interface IForm {
	id: string
	title: string
	subTitle: string
	status: EFormStatus
	ctime: number
	utime: number
	author: string
	isStar: boolean
	// setting: ISetting;
	problems: IProblem<TProblemType>[]
}

// 表单设置
// export interface ISetting {
//   endTime: number;
// }

// 表单题目（新建表单里面的每个题目，id是提交表单后服务端给的，result是用户填写的，用在表单填写页面）
export type IProblem<Type extends TProblemType> = {
	id?: string
	type: Type
	title: string
	required: boolean
	setting: TSetting<Type>
	result?: TResult<Type>
}

export interface IStarProblem<Type extends TProblemType> {
	id: string
	uId: string
	problem: Omit<IProblem<Type>, "result" | "id" | "status">
	status: EStatus
}

// 题目类型
export type TProblemType =
	| "input"
	| "singleSelect"
	| "multiSelect"
	| "pullSelect"
	| "date"
	| "time"
	| "score"

export interface IProblemType {
	title: string
	type: TProblemType
}

// 题目结果
export type TResult<T extends TProblemType> = T extends "singleSelect"
	? ISingleResult
	: T extends "multiSelect"
	? IMultiResult
	: T extends "pullSelect"
	? ISingleResult
	: T extends "score"
	? IScoreResult
	: IInputResult

// 单选题结果
export interface ISingleResult {
	value: Omit<ISelectOption, "status">
}

// 多选题结果
export interface IMultiResult {
	value: Omit<ISelectOption, "status">[]
}

// 填空题结果
export interface IInputResult {
	value: string
}

// 分数题结果
export interface IScoreResult {
	value: number
}

// 题目设置(T如果是单选，多选，下拉题的话，就设置成选择设置类型，可以互相替换)
export type TSetting<T extends TProblemType> = T extends "singleSelect"
	? ISelectSetting
	: T extends "multiSelect"
	? ISelectSetting
	: T extends "pullSelect"
	? ISelectSetting
	: null

// 选择设置(如果是上述单选多选下拉题的话，那么里面的每个子选项都是有标题的，这里放的是子选项数组)
export interface ISelectSetting {
	options: ISelectOption[]
	// other: boolean;
}

// 选项（这个是每个子选项的信息，id就使用index即可，注意转换成字符串类型）
export interface ISelectOption {
	id: string
	title: string
	status: ESelectOptionStatus
}

// 选项状态
export enum ESelectOptionStatus {
	delete = 1,
	normal,
}

// 表单状态
export enum EFormStatus {
	delete = 1,
	normal,
	ing,
	end,
}

// 用户
export interface IUser {
	id: string
	nickname: string
	account: string
	status: EStatus
	pwd: string
	avatar: string
	ctime: number
	utime: number
}

export enum EStatus {
	delete = 1,
	normal,
}

export interface IFormModule {
	id: string
	formId: string
	ctime: string
	status: EStatus
	problems: IProblem<TProblemType>[]
}

export interface IFormResult {
	id: string
	formAuthor: string
	formId: string
	result: IProblem<TProblemType>[]
}

// 请求接口类型
export interface IRegisterReq {
	account: string
	pwd: string
	confirmPwd: string
}

export interface ILoginReq {
	account: string
	pwd: string
}

export interface ISetUserInfoReq {
	nickname: string
	avatar: string
}

export interface IChangePwdReq {
	pwd: string
	oldPwd: string
	confirmPwd: string
}

export interface ICancelStarReq {
	id: string
}

export interface IStarProblemReq {
	problem: Omit<IProblem<TProblemType>, "result" | "id" | "status">
}

export interface IListReq {
	isStar?: boolean
	offset: number
	limit: number
}

export interface ICreateFormReq {
	title: string
	subTitle: string
	problems: (IProblem<TProblemType> & { isNew: boolean })[]
}

export interface IInputReq {
	formId: string
	problems: Required<IProblem<TProblemType>>[]
}

// 表单单个填写详情类型
export interface IFormFillRes {
	formAuthor: string
	formId: string
	id: string
	result: Required<IProblem<TProblemType>>[]
}
