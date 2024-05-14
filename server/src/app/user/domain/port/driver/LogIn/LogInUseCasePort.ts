
export default interface LogInUseCasePort {
  validateUser(email: string, plainPassword: string): Promise<boolean>
}
  
