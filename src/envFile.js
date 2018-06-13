import { readFileSync } from 'fs'

export default (path = '../../.env.development') => readFileSync(path, { encoding: 'utf-8' }).trim().split('\n')
