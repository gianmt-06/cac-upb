
export default interface LogInServicePort {
  validateUser(email: string, plainPassword: string): Promise<boolean>
}
  
