import * as React from 'react';
import '../../compiled_css/components/team/Team.css';
import { connect } from 'react-redux';
import { loadTeam } from '../../actions/team';
import getTeam from '../../api/team';

class Team extends React.Component {
  public props: any;

  constructor(props: any) {
    super(props);
    props.getTeam(loadTeam);
  }

  render() {
    const firstTeam = this.props.team[ 0 ];
    const team = firstTeam ? firstTeam.fields.name : '';
    return (
      <div className="team">
        {team}
      </div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getTeam: (action: any) => getTeam(dispatch, action)
  };
};

const ConnectedTeam = connect(
  state => state,
  mapApiToState
)(Team);

export default ConnectedTeam;
