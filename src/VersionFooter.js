import React, { Component } from 'react';
import metadata from './metadata.json'

class VersionFooter extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="p-2 sm:p-0 sm:m-1">
        <p className="text-xs sm:text-lg text-right">Version: {metadata.buildMajor}.{metadata.buildMinor}.{metadata.buildRevision} {metadata.buildTag}</p>
      </div>
    );
  }
}

export default VersionFooter;
