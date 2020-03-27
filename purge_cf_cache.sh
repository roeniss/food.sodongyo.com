#!/bin/bash
aws cloudfront create-invalidation --distribution-id ESRFYZMA7APOB --paths "/*"
echo Done