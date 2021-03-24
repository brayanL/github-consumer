import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';
import type { FC } from 'react';

const propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};

type Props = InferProps<typeof propTypes>;

const RouteWithLayout: FC<Props> = props => {
    const { layout: Layout, component: Component } = props;

    return (
        <Route
            render={(matchProps) => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    );
};

RouteWithLayout.propTypes = propTypes;

export default RouteWithLayout;
