import { AbilityBuilder, PureAbility, createMongoAbility } from '@casl/ability'


type CrudActions = 'create' | 'read' | 'update' | 'delete'

type Ability = [CrudActions, 'user'] | [CrudActions, 'comment']

export type AppAbility = PureAbility<Ability>

export const abilitys: ActionSubject[] = [
  {
    action: 'read',
    subject: 'comment'
  },
  {
    action: 'create',
    subject: 'comment'
  },
  {
    action: 'update',
    subject: 'comment'
  },
  {
    action: 'delete',
    subject: 'comment'
  }
]

interface ActionSubject {
  action: CrudActions
  subject: 'user' | 'comment'
}

const appApability = () => {
  const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility)

  abilitys.forEach((value) => {
    can(value.action, value.subject)
  })

  return build()
}

export default appApability

