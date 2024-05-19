export default interface DeleteAppmntRepositoryPort {
  deleteAppmnt(code: string): Promise<boolean>
}