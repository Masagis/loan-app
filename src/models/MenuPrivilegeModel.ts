export default class MenuPrivilegeModel {
  menuId!: string
  menuTitle!: string
  parentMenuId!: string
  menuRoute!: string
  menuIcon!: string
  roleId!: string
  roleName!: string
  subMenu!: this[]
}
