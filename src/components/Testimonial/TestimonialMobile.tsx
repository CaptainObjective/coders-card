import React from 'react';
import { Box, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image';

import type { TestimonialVariantProps } from './Testimonial.types';

const AVATAR_SIZE = 64;

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    borderRadius: 0,
    boxShadow: theme.shadows[0],
    backgroundColor: 'transparent',
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    position: 'relative',
    zIndex: 1,
  },
  image: {
    padding: 0,
    borderRadius: 8,
    boxShadow: theme.shadows[0],
  },
  overlayBox: {
    padding: 0,
    borderRadius: 8,
    boxShadow: theme.shadows[4],
    minHeight: 156,
    transform: 'translateY(-40px)',
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(1.5),
    textAlign: 'center',
    transform: 'translateY(40px)',
    fontStyle: 'italic',
  },
  labelOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0',
    transform: 'translateY(40px)',
  },
  label: {
    color: theme.palette.text.primary,
    margin: theme.spacing(0.5),
  },
}));

export const TestimonialMobile = ({
  content,
  authorImage,
  authorJob,
  authorName,
  ...props
}: TestimonialVariantProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} {...props}>
      <Box className={classes.overlay}>
        <Image
          className={classes.image}
          src={authorImage}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          alt={`Testimonial from ${authorName}`}
          layout="fixed"
        />
      </Box>
      <CardContent className={classes.overlayBox}>
        <Typography className={classes.content} variant="body2">
          {content}
        </Typography>
        <CardContent className={classes.labelOverlay}>
          <Typography color="textPrimary" variant="h6">
            {authorName},
          </Typography>
          <Typography className={classes.label} variant="body2">
            {authorJob}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};
