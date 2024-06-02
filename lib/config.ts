export interface Config<Parsed extends boolean = false> {
  pagesDir: string
  dirs: () => string | string
  socials?: Normalize<Socials<Parsed>>,
  topNav?: any[]
  sidebar?: { text: string, link: string }[]

}

export type TopNavItem = {
  text: string
  link?: string
}

export type Socials<parsed extends boolean = false> = parsed extends true
  ? ParsedSocialItem[]
  : SocialItem[]

export type ParsedSocialItem = Required<SocialItem> & {
  type: SocialType
}
export type SocialType = 'discord' | 'github' | 'telegram' | 'warpcast' | 'x'

type Normalize<T> = {
  [K in keyof T]: T[K]
} & {}
export type SocialItem = {
  icon: SocialType
  label?: string
  link: string
}


export const defineConfig = (config: Config) => {

  return config
}