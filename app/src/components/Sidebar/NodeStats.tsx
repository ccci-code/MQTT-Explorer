import * as React from 'react'
import * as q from '../../../../backend/src/Model'
// import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'
import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles'

interface Props {
  node: q.TreeNode,
  classes: any,
  theme: Theme
}

interface State {
  node?: q.TreeNode | undefined
}

class NodeStats extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
  }

  public static styles: StyleRulesCallback<string> = (theme: Theme) => {
    return {
    }
  }

  public render() {
    const leafes = this.props.node.leafes()
    const leafMessages = leafes
      .map(leaf => leaf.messages)
      .reduce((a, b) => a + b)

    return <Typography>
      <p>Messages: #{this.props.node.messages}</p>
      <p>Subtopics: {leafes.length}</p>
      <p>Messages Subtopics: #{leafMessages}</p>
    </Typography>
  }
}

export default withStyles(NodeStats.styles, { withTheme: true })(NodeStats)
