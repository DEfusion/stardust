import cx from 'classnames'
import React, { PropTypes } from 'react'
import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A group of segments can be formatted to appear together.
 */
function SegmentGroup(props) {
  const { children, className, compact, horizontal, raised, stacked, piled } = props
  const classes = cx(
    'ui',
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(piled, 'piled'),
    useKeyOnly(raised, 'raised'),
    useKeyOnly(stacked, 'stacked'),
    className,
    'segments',
  )

  const rest = getUnhandledProps(SegmentGroup, props)
  const ElementType = getElementType(SegmentGroup, props)

  return <ElementType className={classes} {...rest}>{children}</ElementType>
}

SegmentGroup._meta = {
  name: 'SegmentGroup',
  parent: 'Segment',
  type: META.TYPES.ELEMENT,
}

SegmentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** Nested segments for this Segment group */
  children: PropTypes.node,

  /** A segment may take up only as much space as is necessary */
  compact: PropTypes.bool,

  /** Formats content to be aligned horizontally */
  horizontal: PropTypes.bool,

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** A segment group may be formatted to raise above the page. */
  raised: PropTypes.bool,

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool,
}

export default SegmentGroup
