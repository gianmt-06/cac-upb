
export default interface LogInRepositoryPort {
  validateUser(email: string, plainPassword: string): Promise<boolean>
}
  
