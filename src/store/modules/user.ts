import MenuPrivilegeModel from '@/models/MenuPrivilegeModel'
import store from '@/store'
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'

export interface IUserState {
  accessToken: string
  refreshToken: string
  menuList: MenuPrivilegeModel[]
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public pkceState: string = localStorage.pkceState
  public accessToken: string = localStorage.accessToken
  public refreshToken: string = localStorage.refreshToken
  public menuList: MenuPrivilegeModel[] = []

  @Mutation
  private SET_PKCE_STATE (pkceState: string) {
    localStorage.setItem('pkceState', pkceState)
    this.pkceState = pkceState
  }

  @Mutation
  private SET_ACCESS_TOKEN (accessToken: string) {
    localStorage.setItem('accessToken', accessToken)
    this.accessToken = accessToken
  }

  @Mutation
  private SET_REFRESH_TOKEN (refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken)
    this.refreshToken = refreshToken
  }

  @Mutation
  private SET_MENU_LIST (menuList: MenuPrivilegeModel[]) {
    this.menuList = menuList
  }

  @Action
  public SetPkceState (pkceState: string) {
    return new Promise<void>((resolve) => {
      this.SET_PKCE_STATE(pkceState)
      resolve()
    })
  }

  @Action
  public SetAccessToken (accessToken: string) {
    return new Promise<void>((resolve) => {
      this.SET_ACCESS_TOKEN(accessToken)
      resolve()
    })
  }

  @Action
  public SetMenuList (menuList: MenuPrivilegeModel[]) {
    return new Promise<void>((resolve) => {
      this.SET_MENU_LIST(menuList)
      resolve()
    })
  }

  @Action
  public SetRefreshToken (refreshToken: string) {
    return new Promise<void>((resolve) => {
      this.SET_REFRESH_TOKEN(refreshToken)
      resolve()
    })
  }

  @Action
  public Logout () {
    return new Promise<void>((resolve) => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      this.SET_ACCESS_TOKEN('')
      this.SET_REFRESH_TOKEN('')
      this.SET_PKCE_STATE('')
      this.SET_MENU_LIST([])
      resolve()
    })
  }
}

export const UserModule = getModule(User)
