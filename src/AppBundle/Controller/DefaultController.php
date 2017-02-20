<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="admin")
     */
    public function adminAction()
    {
        return new Response(
            file_get_contents(__DIR__ . '/../../../web/admin.html')
        );
    }

    /**
     * @Route("/homepage", name="homepage")
     */
    public function indexAction()
    {
        return new Response('Homepage');
    }
}
