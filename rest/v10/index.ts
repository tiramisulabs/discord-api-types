export * from '../common';
export * from './application';
export * from './auditLog';
export * from './autoModeration';
export * from './channel';
export * from './emoji';
export * from './gateway';
export * from './guild';
export * from './guildScheduledEvent';
export * from './interactions';
export * from './invite';
export * from './oauth2';
export * from './poll';
export * from './stageInstance';
export * from './sticker';
export * from './template';
export * from './user';
export * from './voice';
export * from './webhook';
export * from './monetization';

export const APIVersion = '10';

export const StickerPackApplicationId = '710982414301790216';

export enum ImageFormat {
	JPEG = 'jpeg',
	PNG = 'png',
	WebP = 'webp',
	GIF = 'gif',
	Lottie = 'json',
}

export type DefaultUserAvatarAssets = 0 | 1 | 2 | 3 | 4 | 5;

export type EmojiFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildIconFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildSplashFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildDiscoverySplashFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type UserBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type DefaultUserAvatar = Extract<ImageFormat, ImageFormat.PNG>;
export type UserAvatarFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildMemberAvatarFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type ApplicationIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type ApplicationCoverFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type ApplicationAssetFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type AchievementIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StickerPackBannerFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type TeamIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StorePageAssetFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StickerFormat = Extract<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie | ImageFormat.PNG>;
export type RoleIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildScheduledEventCoverFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildMemberBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
