import React from 'react'
import { Link } from 'react-router-dom'

export const Sorawlar_Teksti: React.FC = () => {

  return (
    <div className="list">
      <ul>
        <Link to={'/sorawları-teksti/8-klass'}>
          <li><span>8-klass</span></li>
        </Link>
      </ul>
    </div>
  )
}