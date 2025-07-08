import { useDocumentOperation } from 'sanity'
export function createImprovedAction(originalPublishAction) {
  const BetterAction = props => {
    const originalResult = originalPublishAction(props)
    const { patch, publish } = useDocumentOperation(props.id, props.type)
    return {
      ...originalResult,
      onHandle: () => {
        const projectYear = new Date(props.draft.date).getFullYear()
        patch.execute([
          { set: { era: (projectYear - (projectYear % 10)).toString() } },
        ])

        originalResult.onHandle()
      },
    }
  }
  return BetterAction
}
