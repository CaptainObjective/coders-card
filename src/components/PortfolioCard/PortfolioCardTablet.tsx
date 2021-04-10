import React from 'react';
import { Smartphone } from 'react-feather';
import { Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image';

import type { PortfolioCardVariantProps } from './PortfolioCard.types';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    boxShadow: theme.shadows[4],
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  media: {
    position: 'relative',
    minWidth: 240,
    minHeight: 135,
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  content: {
    width: '100%',
    padding: theme.spacing(2.5, 3),
  },
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.secondary,
  },
  label: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1),
    padding: theme.spacing(0.5, 1.5, 0.5, 1),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 16,
  },
}));

export const PortfolioCardTablet = ({
  title,
  label,
  description,
  image,
  onClick,
  className = '',
  ...props
}: PortfolioCardVariantProps) => {
  const classes = useStyles();

  return (
    <Card {...props} onClick={onClick} className={`${classes.card} ${className}`}>
      <CardActionArea className={classes.action}>
        <CardMedia className={classes.media}>
          <Box position="absolute" top={0} right={0} bottom={0} left={0}>
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          </Box>
          <Typography className={classes.label} variant="subtitle2">
            <Smartphone className={classes.icon} />
            <span>{label}</span>
          </Typography>
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <Typography className={classes.description} variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
