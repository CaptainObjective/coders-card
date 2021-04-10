import React from 'react';
import { Download } from 'react-feather';
import { Box, Divider, makeStyles, MenuList, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Image from 'next/image';

import { Button } from '@/components/Button';

import type { NavbarProps } from './Navbar';
import { renderNavItems } from './renderNavItems';

const AVATAR_SIZE = 48;

type NavbarTabletProps = Omit<NavbarProps, 'type'>;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[3],
    overflow: 'hidden',
  },
  image: {
    borderRadius: 8,
  },
  menu: {
    display: 'flex',
    padding: 0,
  },
}));

export const NavbarTablet = ({ className, fullName, image, position, resumeLink, ...props }: NavbarTabletProps) => {
  const classes = useStyles();

  return (
    <Box {...props} className={clsx(className, classes.root)}>
      <Box display="flex" alignItems="center" justifyContent="space-between" px={4} py={1}>
        <Box display="flex" alignItems="center">
          <Image
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            className={classes.image}
            src={image}
            alt={`${fullName} avatar`}
            layout="fixed"
            priority
          />
          <Box ml={1.5}>
            <Typography variant="h5">{fullName}</Typography>
            <Typography variant="subtitle2">{position}</Typography>
          </Box>
        </Box>
        {resumeLink && (
          <Button size="small" variant="contained" color="primary" href={resumeLink} startIcon={<Download size={16} />}>
            Download CV
          </Button>
        )}
      </Box>
      <Divider />
      <MenuList className={classes.menu} variant="menu">
        {renderNavItems()}
      </MenuList>
    </Box>
  );
};
