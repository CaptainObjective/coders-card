import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image';

import type { TestimonialVariantProps } from './Testimonial.types';

const AVATAR_SIZE = 64;

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    borderRadius: 0,
    boxShadow: theme.shadows[0],
    backgroundColor: 'transparent',
    overflow: 'visible',
    position: 'relative',
    paddingBottom: 30,
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 100,

    '& > div:first-of-type': {
      minWidth: AVATAR_SIZE,
    },
  },
  image: {
    padding: 0,
    borderRadius: 8,
    boxShadow: theme.shadows[0],
  },
  overlayDescription: {
    display: 'flex',
    width: 396,
    height: 140,
    borderRadius: 8,
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
  overlayLabel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    margin: theme.spacing(1),
    padding: 0,
    paddingTop: theme.spacing(3),
    paddingBottom: '0 !important',
  },
  description: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(3),
    fontStyle: 'italic',
  },
}));

export const TestimonialDefault = ({
  content,
  authorImage,
  authorJob,
  authorName,
  ...props
}: TestimonialVariantProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} {...props}>
      <CardContent className={classes.overlayDescription}>
        <Typography className={classes.description} variant="body2">
          {content}
        </Typography>
      </CardContent>
      <CardContent className={classes.overlay}>
        <Image
          className={classes.image}
          src={authorImage}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          alt={`Testimonial from ${authorName}`}
          layout="fixed"
        />
        <CardContent className={classes.overlayLabel}>
          <Typography color="textPrimary" variant="h5">
            {authorName}
          </Typography>
          <Typography color="textPrimary">{authorJob}</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};
