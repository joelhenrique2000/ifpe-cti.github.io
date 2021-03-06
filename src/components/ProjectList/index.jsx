import React from 'react'
import CardProject from '../CardProject'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { generateList } from '../../actions/ProjectActions'
import { ContainerCardProject } from './styles'
import moment from 'moment'

class ProjectList extends React.Component {

    constructor(props) {
        super(props)
        this.props.generateList()
    }

    render() {
        const renderTows = () => {
            const listRepos = this.props.list || []

            return listRepos.map(project => {
                return (
                    <CardProject
                        key={project.id}
                        name={project.name}
                        language={project.language === null ? "não informado" : project.language}
                        license={project.license === null ? "não informado" : project.lincense}
                        createdAt={moment(project.created_at).format('DD/MM/YYYY')}
                        description={project.description}
                        svn_url={project.svn_url}
                    />
                )
            })
        }

        return (
            <ContainerCardProject>
                {renderTows()}
            </ContainerCardProject>
        )
    }

}

const mapStateToProps = state => ({
    list: state.projectState.list
})

const mapDispatachToProps = dispatch => bindActionCreators({
    generateList
}, dispatch)

export default connect(mapStateToProps, mapDispatachToProps)(ProjectList)