import store from '@/store'
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

export interface IApplicationState {
  navigationDrawerState: boolean
  loadingOverlayState: boolean
  pageTitle: string
  breadcrumbs: { text: string, disabled: boolean, href: string }[]
}

@Module({ dynamic: true, store, name: 'application' })
class Application extends VuexModule implements IApplicationState {
  navigationDrawerState = true
  loadingOverlayState = false
  pageTitle = ''
  breadcrumbs: { text: string, disabled: boolean, href: string }[] = []

  @Mutation
  private SET_NAVIGATION_DRAWER (navigationDrawerState: boolean) {
    this.navigationDrawerState = navigationDrawerState
  }

  @Mutation
  private SET_LOADING_OVERLAY (loadingOverlayState: boolean) {
    this.loadingOverlayState = loadingOverlayState
  }

  @Mutation
  private SET_BREADCRUMBS (breadcrumbs: { text: string, disabled: boolean, href: string }[]) {
    this.breadcrumbs = breadcrumbs
  }

  @Mutation
  private SET_PAGE_TITLE (pageTitle: string) {
    this.pageTitle = pageTitle
    document.title = `Loan App | ${this.pageTitle}`
  }

  @Action
  public toggleNavigationDrawer () {
    return new Promise<void>((resolve) => {
      this.SET_NAVIGATION_DRAWER(!this.navigationDrawerState)
      resolve()
    })
  }

  @Action setNavigationDrawer (navigationDrawerState: boolean) {
    return new Promise<void>((resolve) => {
      this.SET_NAVIGATION_DRAWER(navigationDrawerState)
      resolve()
    })
  }

  @Action
  public showLoadingOverlay () {
    return new Promise<void>((resolve) => {
      this.SET_LOADING_OVERLAY(true)
      resolve()
    })
  }

  @Action
  public dismissLoadingOverlay () {
    return new Promise<void>((resolve) => {
      this.SET_LOADING_OVERLAY(false)
      resolve()
    })
  }

  @Action
  public setBreadcrumbs (breadcrumbs: { text: string, disabled: boolean, href: string }[]) {
    return new Promise<void>((resolve) => {
      this.SET_BREADCRUMBS(breadcrumbs)
      resolve()
    })
  }

  @Action
  public setPageTitle (pageTitle: string) {
    return new Promise<void>((resolve) => {
      this.SET_PAGE_TITLE(pageTitle)
      resolve()
    })
  }
}

export const ApplicationModule = getModule(Application)
