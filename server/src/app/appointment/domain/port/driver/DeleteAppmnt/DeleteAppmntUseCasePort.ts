
export default interface DeleteAppmntUseCasePort {
  deleteAppmnt(code: string): Promise<boolean>
}