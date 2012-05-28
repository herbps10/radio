WGSU Radio Website
==================

This site is based on the Jekyll static site generator. 

Jekyll renders the site into flat HTML that can be served straight from the Geneseo servers without any need for PHP or other such fancy technologies. Thus, the site is secure, while not sacrificing easy updates. 

Install Jekyll
=============
Jekyll is based on Ruby, so make sure that Ruby + Rubygems is installed on your system first. I'll leave how to do that to any one of the much better tutorials out there on the internet.

Once you have those installed, grab Jekyll with
`gem install jekyll`

To regenerate the site, run the following in the main folder:

`jekyll`

Alternatively, if you're going to be doing a lot of development work on the site, launch the Jekyll server with

`jekyll --auto --server`

Every time you make a change, the site will be automatically regenerated.

The site is then accessible at

`localhost:4000`
