import MenuPrivilegeModel from './MenuPrivilegeModel'
import UserModel from './UserModel'

export default class UserPrivilegeModel {
  user!: UserModel
  listPrivilege!: MenuPrivilegeModel[]
}
