export default interface DeleteAppmntRepositoryPort {
  deleteAppmnt(id: string): Promise<boolean>
}