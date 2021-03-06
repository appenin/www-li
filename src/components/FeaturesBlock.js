import React from 'react';
import _ from 'lodash';

import {toStyleObj, safePrefix, classNames, htmlToReact, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class FeaturesBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={classNames('block', 'features-block', 'outer', {'has-header': _.get(this.props, 'section.title') || _.get(this.props, 'section.subtitle')}, {'alternate': _.get(this.props, 'section.alternate')}, {'outlined': _.get(this.props, 'section.outlined')},{'invisible-box': _.get(this.props, 'section.invisible-box')}, {'fancy-box': _.get(this.props, 'section.fancy-box')}, {'bg-gradient': _.get(this.props, 'section.highlight')}, {'bg-gradient-alt': _.get(this.props, 'section.highlight-alt')})}>
              <div className="inner">
                <div className="block-inside">
                  {(_.get(this.props, 'section.title') || _.get(this.props, 'section.subtitle')) && 
                  <div className="block-header">
                    {_.get(this.props, 'section.title') && 
                    <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                    }
                    {_.get(this.props, 'section.subtitle') && 
                    <p className="block-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  }
                  {_.get(this.props, 'section.featureslist') && 
                  <div className="block-items">
                    {_.map(_.get(this.props, 'section.featureslist'), (feature, feature_idx) => (
                    <section key={feature_idx} className="block-item">
                      <div className={classNames('block-item-inside', {'with-icon': _.get(feature, 'icon')})} style={_.get(feature, 'icon') && toStyleObj('background-image: url(\'' + safePrefix(_.get(feature, 'icon')) + '\')')}>
                        <h3 className="block-item-title line-left">{_.get(feature, 'title')}</h3>
                        <div className="block-item-text">
                          {markdownify(_.get(feature, 'content'))}
                        </div>
                        {_.get(feature, 'actions') && 
                          <CtaButtons {...this.props} actions={_.get(feature, 'actions')} />
                        }
                      </div>
                    </section>
                    ))}
                  </div>
                  }
                </div>
              </div>
            </section>
        );
    }
}
