
export default interface DeleteAppmntUseCasePort {
  deleteAppmnt(id: string): Promise<boolean>
}