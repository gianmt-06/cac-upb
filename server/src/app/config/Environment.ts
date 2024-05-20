export default class Environment {
    PRIORITY_AGE: number
    PRIORITY_CLIENT_TYPE: string
  
    constructor() {
      this.PRIORITY_AGE = parseInt(process.env['PRIORITY_AGE'] || '60') ?? 60,
      this.PRIORITY_CLIENT_TYPE = process.env['PRIORITY_CLIENT_TYPE'] ?? '1'
    }
  }