<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://linkweb.fr
 * @since      1.0.0
 *
 * @package    Web_linker
 * @subpackage Web_linker/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Web_linker
 * @subpackage Web_linker/public
 * @author     Linkweb <technique@linkweb.fr>
 */
class Web_linker_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Web_linker_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Web_linker_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/web_linker-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Web_linker_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Web_linker_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/web_linker-public.js', array( 'jquery' ), $this->version, false );


	}
	/**
	 * Create Shortcode to display React App
	 */
	public function register_shortcodes(){

		add_shortcode( 'react',array($this,'create_shortcode') );
	}

	public function create_shortcode( $atts = array(), $content = null , $tag = 'react' ){
		ob_start();
		?>
			<script src='https://meet.jit.si/external_api.js'></script>
			<?php wp_enqueue_script( 'example-app', plugins_url( 'build/index.js', __FILE__ ), array( 'wp-element' ), time(), true ); ?>
			<div id="app">App goes here</div>
		<?php 
		return ob_get_clean();
	
	} 
		

}
