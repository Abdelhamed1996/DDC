import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getGithubRepos} from '../../actions/profile'
import Spinner from '../layout/Spiner'

const ProfileGithub=({username, getGithubRepos, repos})=>{
    useEffect(()=>{
        getGithubRepos(username)
    },[getGithubRepos(username)])
    return <>
            <div className="profile-github">
                <h2 className="text-primary my-1 text-center mt-4 mb-4">Github Repos</h2>
                {repos.map(repo => (
                    <div key={repo.id} className="repo bg-white p-1 my-1 d-flex m-2 justify-content-between">
                      <div>
                        <h4>
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                          </a>
                        </h4>
                        <p>{repo.description}</p>
                      </div>
                      <div>
                        <ul className="ul-g d-flex flex-column">
                          <li className="badge badge-primary m-1">
                            Stars: {repo.stargazers_count}
                          </li>
                          <li className="badge badge-dark m-1">
                            Watchers: {repo.watchers_count}
                          </li>
                          <li className="badge badge-light m-1">Forks: {repo.forks_count}</li>
                        </ul>
                      </div>
                    </div>
                ))}
            </div>
    </>
}

ProfileGithub.propTypes={
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}


const mapStateToProps = state =>({
    repos: state.profile.repos
})

export default connect(mapStateToProps,{getGithubRepos})(ProfileGithub)