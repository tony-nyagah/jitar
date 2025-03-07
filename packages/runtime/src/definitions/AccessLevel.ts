
const AccessLevels =
{
    PRIVATE: 'private',
    PUBLIC: 'public'
} as const;

Object.freeze(AccessLevels);

type Keys = keyof typeof AccessLevels;
type AccessLevel = typeof AccessLevels[Keys];

export { AccessLevels, AccessLevel };
