
export default interface LogInRepositoryPort {
  getCredentials(email: string, plainPassword: string): Promise<boolean>
}
  
