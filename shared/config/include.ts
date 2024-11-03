import path from 'node:path'

export const includeConfig  = {
  resolvePath: (file: string) => {
    if (file.startsWith('@shared-docs'))
      return file.replace('@shared-docs', path.resolve(__dirname, '..', 'docs'))

    return file
  },
}
