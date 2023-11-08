import NextLink from "next/link"
import Image from "next/image"
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display="flex" alignItems="center">
            <Image width={30} height={30} src="/logo.png" alt="logo del ecommerce" className="imagen-logo"/>
            <Typography variant="h6" marginLeft={1}>Ecommerce</Typography>     
          </Link>
        </NextLink>
        
        <Box flex={1}/>
        <Box sx={{ display: { xs: "none", sm: "block" }}}>
        <NextLink href="/category/mouse" passHref legacyBehavior>
          <Link>
            <Button>Mouse</Button>   
          </Link>
        </NextLink>
        <NextLink href="/category/streaming" passHref legacyBehavior>
          <Link>
            <Button>Streaming</Button>   
          </Link>
        </NextLink>
        <NextLink href="/category/keyboard" passHref legacyBehavior>
          <Link>
            <Button>Keyboard</Button>   
          </Link>
        </NextLink>
        </Box>

        <Box flex={1}/>
        <IconButton>
          <SearchOutlined/>
        </IconButton>
        <NextLink href="/cart" passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={5} color="secondary">
                <ShoppingCartOutlined/>
              </Badge>
            </IconButton>    
          </Link>
        </NextLink>
        <Button>
          Menu
        </Button>

      </Toolbar>
    </AppBar>
  )
}